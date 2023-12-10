import React from 'react';
import { css, cx } from '@emotion/css';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';

type TypographyProps = {
    className?: string;
    variant: 'headingPage' | 'headingSection' | 'headingSubsection' | 'caption' | 'body';
    bold?: boolean;
    children: React.ReactNode;
    component: React.ElementType;
}

export const Typography = ({ className, variant, bold, children, component }: TypographyProps) => {
    const typeMap = {
        'headingPage': {
            component: 'h1',
            family: Fonts.HEADING,
            size: '4.209rem',
            weight: 700,
        },
        'headingSection': {
            component: 'h2',
            family: Fonts.HEADING,
            size: '2.802rem',
            weight: 700,
        },
        'headingSubsection': {
            component: 'h3',
            family: Fonts.HEADING,
            size: '1.868rem',
            weight: 700,
        },
        'caption': {
            component: 'p',
            family: Fonts.BODY,
            size: '0.625rem',
            weight: 500,
        },
        'body': {
            component: 'p',
            family: Fonts.BODY,
            size: '1rem',
            weight: bold ? 500 : 400,
        },
    }
    const type = React.useMemo(() => typeMap[variant], [variant]);
    const TypographyComponent = component || type.component;


    const typographyStyle = css`
    color: ${Colors.PRIMARY};
    font-family: ${type.family};
    font-size: ${type.size};
    font-weight: ${type.weight};`;

    return (
        <TypographyComponent className={cx(typographyStyle, className)}>
            {children}
        </TypographyComponent>
    );
};
