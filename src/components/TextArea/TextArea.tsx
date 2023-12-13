import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Spacing } from '../../utils/spacing';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { Label } from '../Input/Label';
import { Error } from '../Input/Error';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    errorMessage?: string;
}

export const TextArea = ({ className, label, onChange, errorMessage, ...props }: TextAreaProps) => {
    const textAreaStyle = css`
    display: block;
    color: ${Colors.TEXT};
    background-color: ${Colors.BACKGROUND};
    border: 2px solid ${errorMessage ? Colors.ERROR : Colors.PRIMARY};
    padding: ${Spacing.XS};
    font-family: ${Fonts.BODY.FAMILY};
    font-size: 1rem;
    font-weight: 500;
    border-radius: 3px;
    margin-bottom: ${Spacing.XS};
    min-width: 300px;
    min-height: 143px;`;

    return (
        <>
            <Label>{label}</Label>
            <textarea
                className={cx(textAreaStyle, className)}
                onChange={onChange}
                {...props}
            />
            {errorMessage && <Error>{errorMessage}</Error>}
        </>
    );
}
