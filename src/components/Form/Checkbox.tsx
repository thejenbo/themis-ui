import * as React from 'react';
import { css, cx } from '@emotion/css';
import { FormCheckbox, FormLabel } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

type CheckboxProps = {
    name: string;
    className?: string;
    label: string;
    placeholder?: string;
}

export const Checkbox = ({ className, label, name}: CheckboxProps) => {
    const labelStyle = css`
    color: ${Colors.PRIMARY};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};`;

    const checkboxStyle = css`
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
        <FormLabel name={name} className={cx(labelStyle, className)}>{label}
            <FormCheckbox
                name={name}
                className={checkboxStyle}
            />
        </FormLabel>
    );
}
