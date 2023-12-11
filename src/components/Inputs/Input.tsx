import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';
import { Label } from './Label';

type InputProps = {
    name: string;
    className?: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    isErrored?: boolean;
}

export const Input = ({ className, label, placeholder, value, onChange, name, type, isErrored }: InputProps) => {
    const inputStyle = css`
    display: block;
    color: ${Colors.PRIMARY};
    background-color: ${Colors.WHITE};
    border: 2px solid ${isErrored ? Colors.ERROR : Colors.PRIMARY};
    padding: ${Spacing.XS};
    font-family: ${Fonts.BODY};
    font-size: 1rem;
    font-weight: 700;
    gap: ${Spacing.XS};
    border-radius: 3px;
    margin-bottom: ${Spacing.XS};`;

    return (
        <>
            <Label>{label}</Label>
            <input
                name={name}
                className={inputStyle}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
            />
        </>
    );
}
