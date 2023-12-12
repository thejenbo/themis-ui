import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';
import { Label } from './Label';
import { Error } from './Error';

interface InputProps extends React.TextareaHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errorMessage?: string;
}

export const Input = ({ className, label, placeholder, value, onChange, name, type, errorMessage, ...props }: InputProps) => {
    const inputStyle = css`
    display: block;
    color: ${Colors.TEXT};
    background-color: ${Colors.BACKGROUND};
    border: 2px solid ${errorMessage ? Colors.ERROR : Colors.PRIMARY};
    padding: ${Spacing.XS};
    font-family: ${Fonts.BODY.FAMILY};
    font-size: 1rem;
    font-weight: 500;
    gap: ${Spacing.XS};
    border-radius: 3px;
    margin-bottom: ${Spacing.XS};
    min-width: 300px;`;

    return (
        <>
            <Label>{label}</Label>
            <input
                name={name}
                className={cx(inputStyle, className)}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
                {...props}
            />
            {errorMessage && <Error>{errorMessage}</Error>}
        </>
    );
}
