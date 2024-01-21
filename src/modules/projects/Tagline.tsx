import styled from 'styled-components';
import { Text } from 'src/modules/core/Text';
import { theme } from 'src/modules/theming';

export const Tagline = styled(Text)`
    display: block;
    font-size: ${theme.fontSizes.fs4};
    line-height: ${theme.lineHeights.title};
    color: ${theme.neutralColor.cs1};
`;
