import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';

type ErrorProps = {
    className?: string;
    children: React.ReactNode;
}

export const errorStyle = css`
display: block;
color: ${Colors.ERROR};
font-family: ${Fonts.BODY.FAMILY};
font-size: 1rem;
font-weight: 500;
margin-bottom: ${Spacing.XS};`;

export const Error = ({ className, children }: ErrorProps) => {
    return (
        <div className={cx(errorStyle, className)} aria-live="polite">{children}</div>
    );
}
