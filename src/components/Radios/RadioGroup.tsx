import * as React from 'react';
import { css } from '@emotion/css';
import { RadioGroup as AriaRadioGroup, Radio as AriaRadio, RadioProvider, RadioOptions } from '@ariakit/react';
import { Spacing } from '../../utils/spacing';
import { Label } from '../Input/Label';
import { Error } from '../Input/Error';

type RadioGroupProps = {
    name: string;
    label: string;
    className?: string;
    optionClassName?: string;
    options: Array<RadioOptions>;
    optionOrientation?: 'horizontal' | 'vertical';
    errorMessage?: string;
}

export const RadioGroup = ({ className, optionClassName, label, name, options, optionOrientation = 'horizontal', errorMessage}: RadioGroupProps) => {
    const labelStyle = css`
    display: flex;
    gap: ${Spacing.XS}`

    const optionsContainerStyle = css`
    display: ${optionOrientation === 'horizontal' ? 'flex' : 'block'};
    gap: ${Spacing.XS}`;

    return (
    <RadioProvider>
        <AriaRadioGroup className={className}>
        <Label>{label}</Label>
        <div className={optionsContainerStyle}>
            {options.map((options, i) => (
                <Label key={i} className={labelStyle}>
                    <AriaRadio name={name} className={optionClassName} {...options} />
                    {options.value}
                </Label>
            ))}
        </div>
        {errorMessage && (<Error>{errorMessage}</Error>)}
      </AriaRadioGroup>
    </RadioProvider>
    );
}
