import * as React from 'react';
import { css, cx } from '@emotion/css';
import { RadioGroup, Radio as AriaRadio, RadioProvider } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Fonts } from '../../common/fonts';
import { Label } from './Label';

type RadioGroupProps = {
    name: string;
    className?: string;
    radioClassName?: string;
    label: string;
    values: string[];
}

export const Radio = ({ className, radioClassName, label, name, values}: RadioGroupProps) => {
    const labelStyle = css`
    display: flex;
    gap: ${Spacing.XS}`

    const radioGroupStyle = css`
    color: ${Colors.PRIMARY};
    background-color: transparent;
    border: none;
    font-family: ${Fonts.BODY};
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;`;

    return (
    <RadioProvider>
        <RadioGroup className={cx(radioGroupStyle, className)}>
        <Label>{label}</Label>
        {values.map((value, i) => (
            <>
                <Label key={i} className={labelStyle}>
                    <AriaRadio name={name} value={value} className={radioClassName} />
                    {value}
                </Label>
            </>
        ))}
      </RadioGroup>
    </RadioProvider>
    );
}
