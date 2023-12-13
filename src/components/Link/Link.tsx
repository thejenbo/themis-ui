import * as React from 'react';
import { Link as RouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import { css, cx } from '@emotion/css';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';

type BaseProps = {
    className?: string;
    children: React.ReactNode;
}

type RouterLinkProps = BaseProps & Omit<ReactRouterLinkProps, keyof BaseProps>;

type AnchorTagProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>

type LinkProps = RouterLinkProps | AnchorTagProps;

export const Link = ({ className, ...props}: LinkProps) => {
    const linkStyle = css`
    color: ${Colors.LINK};
    text-decoration: underline;
    font-weight: ${Fonts.BODY.WEIGHTS.NORMAL};
    font-family: ${Fonts.BODY.FAMILY};`;

    if ('to' in props) {
        return (
            <RouterLink className={cx(linkStyle, className)} {...props}>
                {props.children}
            </RouterLink>
        );
    } else {
        return (
            <a className={cx(linkStyle, className)} {...props}>
                {props.children}
            </a>
        );
    }
}
