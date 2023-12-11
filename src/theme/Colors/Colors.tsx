import React from 'react';
import { Colors } from '../../common/colors';
import { Spacing } from '../../common/spacing';
import { Typography } from '../../components/Typography/Typography';

export const ColorsDisplay:React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.PRIMARY, width: '50px', height: '50px', borderRadius: '50%' }} />
                <Typography variant="headingSection" component="h1">
                    Primary
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.SECONDARY, width: '50px', height: '50px', borderRadius: '50%' }} />
                <Typography variant="headingSection" component="h1">
                    Secondary
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.TERTIARY, width: '50px', height: '50px', borderRadius: '50%' }} />
                <Typography variant="headingSection" component="h1">
                    Tertiary
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.SUCCESS, width: '50px', height: '50px', borderRadius: '50%' }} />
                <Typography variant="headingSection" component="h1">
                    Success
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: Spacing.L }}>
                <div style={{ backgroundColor: Colors.ERROR, width: '50px', height: '50px', borderRadius: '50%' }} />
                <Typography variant="headingSection" component="h1">
                    Error
                </Typography>
            </div>
        </>
    )
}