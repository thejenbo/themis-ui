import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Form as AriaForm, useFormStore, FormOptions } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';

interface FormProps extends FormOptions {
    className?: string;
    children: React.ReactNode;
    defaultValues?: {key: string, value: string}[];
};

export const Form = ({className, children, defaultValues, ...props}: FormProps) => {
    const form = useFormStore({defaultValues});

    return (
        <AriaForm className={className} store={form} {...props}>
            {children}
        </AriaForm>
    );
}
