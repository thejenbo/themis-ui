import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';

type LabelProps = {
    className?: string;
    children: React.ReactNode;
}

export const labelStyle = css`
display: block;
color: ${Colors.TEXT};
font-family: ${Fonts.BODY.FAMILY};
font-size: 1.25rem;
Fonts.BODY.WEIGHTS.BOLD;
margin-bottom: ${Spacing.XS};`;

export const Label = ({ className, children }: LabelProps) => {
    return (
        <label className={cx(labelStyle, className)}>{children}</label>
    );
}
