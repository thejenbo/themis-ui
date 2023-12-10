import * as React from 'react';
import { css, cx } from '@emotion/css';
import { FormInput, FormLabel } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

type InputProps = {
    name: string;
    className?: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
}

export const Input = ({ className, label, placeholder, value, onChange, name, type }: InputProps) => {
    const labelStyle = css`
    color: ${Colors.PRIMARY};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};`;

    const inputStyle = css`
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
        <>
            <FormLabel name={name} className={cx(labelStyle, className)}>{label}</FormLabel>
            <FormInput
                name={name}
                className={inputStyle}
                placeholder={placeholder}
                type={type}
            />
        </>
    );
}
