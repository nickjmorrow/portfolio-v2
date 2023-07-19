import styled from 'styled-components';
import { Typography } from 'src/modules/core/Typography';
import { theme } from 'src/modules/theming';
import { GradientText } from 'src/modules/core/GradientText';

export const CardHeader = styled(GradientText)`
    font-size: ${theme.fontSizes.fs9};
    margin-bottom: ${theme.spacing.ss4};
    font-weight: 700;
    display: block;
`;
