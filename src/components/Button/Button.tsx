import React from 'react';
import { css, cx } from '@emotion/css';
import { Button as AriaButton } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

type ButtonProps = {
    className?: string;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ className, variant, children, type }: ButtonProps) => {
    const buttonStyle = css`
    color: ${variant === 'primary' ? Colors.WHITE : Colors.PRIMARY};
    background-color: ${variant === 'primary' ? Colors.PRIMARY : 'transparent'};
    border: ${variant === 'secondary' ? `2px solid ${Colors.PRIMARY}` : 'none'};
    border-radius: 3px;
    padding: ${Spacing.M};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};`;

    return (
        <AriaButton className={cx(buttonStyle, className)} type={type}>
            {children}
        </AriaButton>
    );
};
