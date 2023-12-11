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
color: ${Colors.PRIMARY};
font-family: ${Fonts.BODY};
font-size: 1.25rem;
font-weight: 700;
margin-bottom: ${Spacing.XS};`;

export const Error = ({ className, children }: ErrorProps) => {
    return (
        <Error className={cx(errorStyle, className)}>{children}</Error>
    );
}
