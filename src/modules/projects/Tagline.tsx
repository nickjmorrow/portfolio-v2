import styled from 'styled-components';
import { Typography } from 'src/modules/core/Typography';
import { theme } from 'src/modules/theming';

export const Tagline = styled(Typography)`
    display: block;
    font-size: ${theme.fontSizes.fs4};
    line-height: ${theme.lineHeights.title};
    color: ${theme.neutralColor.cs1};
`;
