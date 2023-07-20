import { GradientText } from 'src/modules/core/GradientText';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const CardHeader = styled(GradientText)`
    font-size: ${theme.fontSizes.fs9};
    margin-bottom: ${theme.spacing.ss4};
    font-weight: 700;
    display: block;
`;
