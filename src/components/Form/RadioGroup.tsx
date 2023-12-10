import * as React from 'react';
import { css, cx } from '@emotion/css';
import { FormRadioGroup, FormRadio, FormGroupLabel, FormLabel } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

type RadioGroupProps = {
    name: string;
    className?: string;
    radioClassName?: string;
    label: string;
    values: string[];
}

export const RadioGroup = ({ className, radioClassName, label, name, values}: RadioGroupProps) => {
    const labelStyle = css`
    color: ${Colors.PRIMARY};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};`;

    const radioGroupStyle = css`
    color: ${Colors.PRIMARY};
    background-color: transparent;
    border: none;
    padding: ${Spacing.S};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    display: inline-flex;
    gap: ${Spacing.S};
    border-bottom: 2px solid ${Colors.PRIMARY};`;

    return (
        
        <FormRadioGroup className={cx(radioGroupStyle, className)}>
        <FormGroupLabel className={labelStyle}>{label}</FormGroupLabel>
        {values.map((value, i) => (
            <>
                <FormLabel key={i} name={name} value={value} className={labelStyle}>
                    {value}
                    <FormRadio name={name} value={value} className={radioClassName} />
                </FormLabel>
            </>
        ))}
      </FormRadioGroup>
    );
}
