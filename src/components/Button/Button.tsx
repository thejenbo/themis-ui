import React from 'react';
import { css, cx } from '@emotion/css';
import { Button as AriaButton } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';

type ButtonProps = {
    className?: string;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
}

export const Button = ({ className, variant, children, type, onClick }: ButtonProps) => {
    const buttonStyle = css`
    color: ${variant === 'primary' ? Colors.WHITE : Colors.PRIMARY};
    background-color: ${variant === 'primary' ? Colors.PRIMARY : 'transparent'};
    border: ${variant === 'secondary' ? `2px solid ${Colors.PRIMARY}` : 'none'};
    border-radius: 3px;
    padding: ${Spacing.S} ${Spacing.L};
    font-family: ${Fonts.BODY};
    font-size: 20px;
    font-weight: 700;
    display: inline-flex;
    gap: ${Spacing.XS};`;

    return (
        <AriaButton className={cx(buttonStyle, className)} type={type} onClick={onClick}>
            {children}
        </AriaButton>
    );
};
