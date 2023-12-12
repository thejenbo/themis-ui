import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Checkbox as AriaCheckbox } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Label } from '../Input/Label';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    label: string;
    placeholder?: string;
}

export const Checkbox = ({ className, label, name, ...props}: CheckboxProps) => {
    const labelStyle = css`
    display: flex;
    align-items: center;
    margin-bottom: ${Spacing.XS};
    gap: ${Spacing.XS};`;

    const checkboxStyle = css`
    padding: ${Spacing.XS};
    gap: ${Spacing.XS};`;

    return (
        <Label className={cx(labelStyle, className)}>
            <AriaCheckbox
                name={name}
                className={checkboxStyle}
                {...props}
            />
            {label}
        </Label>
    );
}
