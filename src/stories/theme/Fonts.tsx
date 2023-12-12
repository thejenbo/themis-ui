import React from 'react';
import { Spacing } from '../../common/spacing';
import { Fonts } from '../../common/fonts';
import { Colors } from '../../common/colors';

export const FontsDisplay: React.FC = () => {
    return (
        <div style={{ color: Colors.TEXT }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L, fontFamily: Fonts.HEADING.FAMILY, fontSize: '48px' }}>
                Heading Font - {Fonts.HEADING.FAMILY}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L, fontFamily: Fonts.BODY.FAMILY, fontSize: '48px' }}>
                Body font - {Fonts.BODY.FAMILY}
            </div>
        </div>
    )
}