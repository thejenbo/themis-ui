import * as React from 'react';
import { css, cx } from '@emotion/css';
import { SelectPopover, SelectLabel, SelectProvider, SelectItem, Select as AriaSelect } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

type SelectProps = {
    name: string;
    className?: string;
    optionClassName?: string;
    popoverClassName?: string;
    label: string;
    options: Array<{value: string}>;
}

export const Select = ({ className, optionClassName, popoverClassName, label, name, options}: SelectProps) => {
    const labelStyle = css`
    color: ${Colors.PRIMARY};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};`;

    const selectStyle = css`
    color: ${Colors.PRIMARY};
    background-color: transparent;
    border: none;
    padding: ${Spacing.S};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};
    border-bottom: 2px solid ${Colors.PRIMARY};`;

    return (
    <SelectProvider>
        <SelectLabel className={labelStyle}>{label}</SelectLabel>
        <AriaSelect className="button" />
        <SelectPopover gutter={4} sameWidth className="popover">
            {options.map((option, i) => (
                <SelectItem value={option.value} />
            ))}
        </SelectPopover>
    </SelectProvider>
    );
}