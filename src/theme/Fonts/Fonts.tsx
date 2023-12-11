import React from 'react';
import { Spacing } from '../../common/spacing';
import { Typography } from '../../components/Typography/Typography';
import { Fonts } from '../../common/fonts';

export const FontsDisplay:React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L, fontFamily: Fonts.HEADING }}>
                <Typography variant="headingPage" component="h1">
                    Heading Font
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L, fontFamily: Fonts.BODY }}>
                <Typography variant="headingPage" component="h1">
                    Body font
                </Typography>
            </div>
        </>
    )
}