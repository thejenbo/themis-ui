import * as React from 'react';
import { css, cx } from '@emotion/css';
import { SelectPopover, SelectLabel, SelectProvider, SelectItem, Select as AriaSelect } from '@ariakit/react';
import { Spacing } from '../../utils/spacing';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { labelStyle } from '../Input/Label';

type SelectProps = {
    name: string;
    className?: string;
    optionClassName?: string;
    popoverClassName?: string;
    label: string;
    options: Array<{value: string}>;
}

export const Select = ({ className, optionClassName, popoverClassName, label, name, options}: SelectProps) => {
    const selectStyle = css`
    color: ${Colors.TEXT};
    background-color: transparent;
    border: none;
    padding: ${Spacing.XS};
    margin-bottom: ${Spacing.XS};
    font-family: ${Fonts.BODY.FAMILY};
    Fonts.BODY.WEIGHTS.BOLD;
    font-size: 1rem;
    gap: ${Spacing.XS};
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 3px;
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;`;

    const popoverStyle = css`
    color: ${Colors.TEXT};
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
    <SelectProvider>
        <SelectLabel className={labelStyle}>{label}</SelectLabel>
        <AriaSelect className={cx(selectStyle, className)} />
        <SelectPopover className={cx(popoverStyle, popoverClassName)} gutter={4} sameWidth>
            {options.map((option, i) => (
                <SelectItem key={i} className={cx(optionStyle, optionClassName)} value={option.value} />
            ))}
        </SelectPopover>
    </SelectProvider>
    );
}