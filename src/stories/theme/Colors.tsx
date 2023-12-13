import React from 'react';
import { Colors } from '../../utils/colors';
import { Spacing } from '../../utils/spacing';
import { Typography } from '../../components/Typography/Typography';

const containerStyle = {
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'space-around',
    gap: Spacing.L,
}

const swatchContainerStyle = {
    display: 'flex', 
    alignItems: 'center', 
    gap: Spacing.L,
    padding: Spacing.L,
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.15)',
    borderRadius: '8px',
    marginBottom: Spacing.L,
}

const swatchStyle = {
    width: '50px', height: '50px', borderRadius: '50%'
}

export const ColorsDisplay:React.FC = () => {
    return (
        <div style={containerStyle}>
            <div>
                <div style={swatchContainerStyle}>
                    <div style={{ backgroundColor: Colors.TEXT, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div">
                        Text
                    </Typography>
                </div>
                <div style={{ ...swatchContainerStyle, backgroundColor: Colors.TEXT }}>
                    <div style={{ backgroundColor: Colors.BACKGROUND, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div" color={Colors.BACKGROUND}>
                        Background
                    </Typography>
                </div>
            </div>
            <div>
                <div style={swatchContainerStyle}>
                    <div style={{ backgroundColor: Colors.PRIMARY, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div">
                        Primary
                    </Typography>
                </div>
                <div style={swatchContainerStyle}>
                    <div style={{ backgroundColor: Colors.SECONDARY, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div">
                        Secondary
                    </Typography>
                </div>
                <div style={swatchContainerStyle}>
                    <div style={{ backgroundColor: Colors.TERTIARY, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div">
                        Tertiary
                    </Typography>
                </div>
            </div>
            <div>
                <div style={swatchContainerStyle}>
                    <div style={{ backgroundColor: Colors.SUCCESS, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div">
                        Success
                    </Typography>
                </div>
                <div style={swatchContainerStyle}>
                    <div style={{ backgroundColor: Colors.ERROR, ...swatchStyle }} />
                    <Typography variant="headingSubsection" component="div">
                        Error
                    </Typography>
                </div>
            </div>
        </div>
    )
}