import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Text = styled.span`
    font-family: ${theme.fontFamilies.default};
    font-weight: ${theme.fontWeights.fw4};
    color: ${theme.neutralColor.cs2};
`;
