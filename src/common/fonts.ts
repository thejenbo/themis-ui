import { config } from './config';

export const Fonts = {
    HEADING: {
        FAMILY: `${config.fonts.heading.family}, sans-serif`,
        WEIGHTS: {
            BOLD: config.fonts.heading.weights.boldWeight,
            NORMAL: config.fonts.heading.weights.normalWeight,
        }
    },
    BODY:  {
        FAMILY: `${config.fonts.body.family}, sans-serif`,
        WEIGHTS: {
            BOLD: config.fonts.body.weights.boldWeight,
            NORMAL: config.fonts.body.weights.normalWeight,
        }
    },
}
