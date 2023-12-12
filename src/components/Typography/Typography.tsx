import React from 'react';
import { css, cx } from '@emotion/css';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';

type TypographyProps = {
    className?: string;
    variant: 'headingPage' | 'headingSection' | 'headingSubsection' | 'caption' | 'body';
    bold?: boolean;
    children: React.ReactNode;
    component?: React.ElementType;
    color?: string;
}

export const Typography = ({ className, variant, bold, children, component, color }: TypographyProps) => {
    const typeMap = {
        'headingPage': {
            component: 'h1',
            family: Fonts.HEADING.FAMILY,
            size: '4.209rem',
            weight: Fonts.HEADING.WEIGHTS.BOLD,
        },
        'headingSection': {
            component: 'h2',
            family: Fonts.HEADING.FAMILY,
            size: '2.802rem',
            weight: Fonts.HEADING.WEIGHTS.NORMAL,
        },
        'headingSubsection': {
            component: 'h3',
            family: Fonts.BODY.FAMILY,
            size: '1.868rem',
            weight: Fonts.BODY.WEIGHTS.BOLD,
        },
        'caption': {
            component: 'p',
            family: Fonts.BODY.FAMILY,
            size: '0.625rem',
            weight: Fonts.BODY.WEIGHTS.NORMAL,
        },
        'body': {
            component: 'p',
            family: Fonts.BODY.FAMILY,
            size: '1rem',
            weight: bold ? Fonts.BODY.WEIGHTS.BOLD : Fonts.BODY.WEIGHTS.NORMAL,
        },
    }
    const type = React.useMemo(() => typeMap[variant], [variant]);
    const TypographyComponent = component || type.component;


    const typographyStyle = css`
    color: ${color ?? Colors.TEXT};
    font-family: ${type.family};
    font-size: ${type.size};
    font-weight: ${type.weight};`;

    return (
        <TypographyComponent className={cx(typographyStyle, className)}>
            {children}
        </TypographyComponent>
    );
};
