import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Spacing } from '../../utils/spacing';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { Label } from '../Input/Label';
import { Error } from '../Input/Error';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    counterClassName?: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    errorMessage?: string;
    maxLength?: number;
}

export const TextArea = ({ className, counterClassName, label, onChange, errorMessage, maxLength, ...props }: TextAreaProps) => {
    const [characterCount, setCharacterCount] = React.useState(props.value?.toString().length || 0);
    const maxLengthExceeded = React.useMemo(() => maxLength && characterCount > maxLength, [characterCount, maxLength]);

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (maxLength) {
            setCharacterCount(event.target.value.length);
        }
        onChange(event);
    };

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

    const counterStyle = css`
    color: ${maxLengthExceeded ? Colors.ERROR : Colors.TEXT};
    display: flex;
    justify-content: flex-end;
    font-family: ${Fonts.BODY.FAMILY};
    font-weight: ${Fonts.BODY.WEIGHTS.NORMAL};`

    return (
        <>
            <Label>{label}</Label>
            <textarea
                className={cx(textAreaStyle, className)}
                onChange={handleTextAreaChange}
                {...props}
            />
            {maxLength && <div className={cx(counterStyle, counterClassName)}>{characterCount} / {maxLength}</div>}
            {errorMessage && <Error>{errorMessage}</Error>}
        </>
    );
}
