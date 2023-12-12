import * as React from 'react';
import { css, cx } from '@emotion/css';
import { Checkbox as AriaCheckbox } from '@ariakit/react';
import { Spacing } from '../../common/spacing';
import { Colors } from '../../common/colors';
import { Label } from '../Input/Label';

type TableProps = {
    name: string;
    className?: string;
    label: string;
    placeholder?: string;
}

export const Table = ({ className, label, name}: TableProps) => {
    const labelStyle = css`
    display: flex;
    margin-bottom: ${Spacing.XS};
    gap: ${Spacing.XS};`;

    const checkboxStyle = css`
    padding: ${Spacing.XS};
    gap: ${Spacing.XS};`;

    return (
        <Label className={cx(labelStyle, className)}>
            <AriaCheckbox
                name={name}
                className={checkboxStyle}
            />
            {label}
        </Label>
    );
}
