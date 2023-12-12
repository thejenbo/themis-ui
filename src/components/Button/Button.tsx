import React from 'react';
import { css, cx } from '@emotion/css';
import { Button as AriaButton } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ className, variant, children, type, onClick, ...props }) => {
    const buttonStyle = css`
    color: ${variant === 'primary' ? Colors.BACKGROUND : Colors.TEXT};
    background-color: ${variant === 'primary' ? Colors.PRIMARY : 'transparent'};
    border: 2px solid ${Colors.PRIMARY};
    border-radius: 3px;
    padding: ${Spacing.S} ${Spacing.L};
    font-family: ${Fonts.BODY.FAMILY};
    font-size: 20px;
    Fonts.BODY.WEIGHTS.BOLD;
    display: inline-flex;
    gap: ${Spacing.XS};
    
    &:not(:disabled) {
        cursor: pointer;
    }`;

    return (
        <AriaButton className={cx(buttonStyle, className)} type={type} onClick={onClick} {...props}>
            {children}
        </AriaButton>
    );
};
