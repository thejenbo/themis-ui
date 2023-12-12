import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Combobox as AriaCombobox, ComboboxProvider, ComboboxPopover, ComboboxItem } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';
import { Label } from '../Input/Label';

interface ComboBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    optionClassName?: string;
    popoverClassName?: string;
    label: string;
    options: Array<{value: string}>;
    placeholder?: string;
    setValue?: (value: string) => void;
}

export const ComboBox = ({ className, optionClassName, popoverClassName, label, options, placeholder, setValue, ...props}: ComboBoxProps) => {
    const labelStyle = css`
    color: ${Colors.TEXT};
    font-family: Fonts.BODY.FAMILY;
    font-size: 20px;
    line-height: 24px;
    Fonts.BODY.WEIGHTS.BOLD;
    gap: ${Spacing.XS};`;

    const comboBoxStyle = css`
    color: ${Colors.TEXT};
    background-color: ${Colors.BACKGROUND};
    border: none;
    padding: ${Spacing.XS};
    font-family: Fonts.BODY.FAMILY;
    font-size: 20px;
    line-height: 24px;
    Fonts.BODY.WEIGHTS.BOLD;
    display: inline-flex;
    gap: ${Spacing.XS};
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 3px;`;

    const popoverStyle = css`
    color: ${Colors.PRIMARY};
    background-color: ${Colors.BACKGROUND};
    border: none;
    padding: ${Spacing.XS};
    font-family: ${Fonts.BODY.FAMILY};
    font-size: 1rem;
    Fonts.BODY.WEIGHTS.BOLD;
    gap: ${Spacing.XS};
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 3px;`;

    const optionStyle = css`
    color: ${Colors.TEXT};
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: ${Spacing.XS};
    font-family: ${Fonts.BODY.FAMILY};
    font-size: 1rem;
    Fonts.BODY.WEIGHTS.BOLD;
    border-radius: 3px;
    
    &:hover, &:focus {
        background-color: ${Colors.PRIMARY};
        color: ${Colors.BACKGROUND};
    }`;

    return (
    <ComboboxProvider setValue={setValue}>
        <Label className={labelStyle}>{label}</Label>
        <AriaCombobox className={cx(comboBoxStyle, className)} placeholder={placeholder} />
        <ComboboxPopover gutter={4} sameWidth className={cx(popoverStyle, popoverClassName)} {...props}>
            {options.map((option, i) => (
                <ComboboxItem value={option.value}  className={cx(optionStyle, optionClassName)}/>
            ))}
        </ComboboxPopover>
    </ComboboxProvider>
    );
}