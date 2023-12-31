import { css } from 'styled-components';

const LIGHTNESS = '11%';
const SATURATION = '60%';

export const radialGradient = css`
    background: radial-gradient(
                circle at top left,
                hsla(334, ${SATURATION}, ${LIGHTNESS}, 0.4) 10%,
                transparent 80%
            )
            100% 100%/200% 200%,
        radial-gradient(
                circle at bottom left,
                hsla(265, ${SATURATION}, ${LIGHTNESS}, 0.7) 30%,
                transparent 80%
            )
            100% 100%/200% 200%,
        radial-gradient(
                circle at top right,
                hsla(232, ${SATURATION}, ${LIGHTNESS}, 0.7) 30%,
                transparent 60%
            )
            100% 100%/200% 200%,
        radial-gradient(
                circle at 75% 75%,
                hsla(155, ${SATURATION}, ${LIGHTNESS}, 0.7) 10%,
                transparent 60%
            )
            100% 100%/200% 200%,
        radial-gradient(
                circle at 50% 50%,
                hsla(265, ${SATURATION}, ${LIGHTNESS}) 70%,
                transparent 100%
            )
            100% 100%/200% 200%;
`;
