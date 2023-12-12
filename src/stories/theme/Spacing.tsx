import React from 'react';
import { Colors } from '../../common/colors';
import { Spacing } from '../../common/spacing';
import { Typography } from '../../components/Typography/Typography';

export const SpacingDisplay:React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.WHITE, width: Spacing.XXS, height: Spacing.XXS, border: `3px dashed ${Colors.PRIMARY}` }} />
                <Typography variant="headingSubsection" component="h3">
                    XXS 4px 0.25rem
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.WHITE, width: Spacing.XS, height: Spacing.XS, border: `3px dashed ${Colors.PRIMARY}` }} />
                <Typography variant="headingSubsection" component="h3">
                    XS 8px 0.5rem
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.WHITE, width: Spacing.S, height: Spacing.S, border: `3px dashed ${Colors.PRIMARY}` }} />
                <Typography variant="headingSubsection" component="h3">
                    S 12px 0.75rem
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.WHITE, width: Spacing.M, height: Spacing.M, border: `3px dashed ${Colors.PRIMARY}` }} />
                <Typography variant="headingSubsection" component="h3">
                    M 16px 1rem
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.WHITE, width: Spacing.L, height: Spacing.L, border: `3px dashed ${Colors.PRIMARY}` }} />
                <Typography variant="headingSubsection" component="h3">
                    L 24px 1.5rem
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.WHITE, width: Spacing.XL, height: Spacing.XL, border: `3px dashed ${Colors.PRIMARY}` }} />
                <Typography variant="headingSubsection" component="h3">
                    XL 32px 2rem
                </Typography>
            </div>
        </>
    )
}