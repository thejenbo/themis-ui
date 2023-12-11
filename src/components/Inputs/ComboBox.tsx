import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Combobox as AriaCombobox, ComboboxProvider, ComboboxPopover, ComboboxItem } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

type ComboBoxProps = {
    name: string;
    className?: string;
    optionClassName?: string;
    popoverClassName?: string;
    label: string;
    options: Array<{value: string}>;
    placeholder?: string;
}

export const ComboBox = ({ className, optionClassName, popoverClassName, label, name, options, placeholder}: ComboBoxProps) => {
    const labelStyle = css`
    color: ${Colors.PRIMARY};
    font-family: Fonts.BODY;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    display: inline-flex;
    gap: ${Spacing.XS};`;

    const selectStyle = css`
    color: ${Colors.PRIMARY};
    background-color: transparent;
    border: none;
    padding: ${Spacing.XS};
    font-family: Fonts.BODY;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    display: inline-flex;
    gap: ${Spacing.XS};
    border-bottom: 2px solid ${Colors.PRIMARY};`;

    return (
    <ComboboxProvider>
        <label className={labelStyle}>{label}</label>
        <AriaCombobox className="button" />
        <ComboboxPopover gutter={4} sameWidth className="popover">
            {options.map((option, i) => (
                <ComboboxItem value={option.value} />
            ))}
        </ComboboxPopover>
    </ComboboxProvider>
    );
}