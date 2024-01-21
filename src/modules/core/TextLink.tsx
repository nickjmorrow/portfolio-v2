import styled from 'styled-components';
import { theme } from 'src/modules/theming';
import { Link } from 'src/modules/core/Link';

export const TextLink = styled(Link)`
    font-family: ${theme.fontFamilies.default};
    text-decoration: none;
    font-weight: 600;
    transition: all ${theme.transitions.fast};
    color: ${theme.coreColor.cs4};
    &:hover {
        transition: all ${theme.transitions.fast};
    }
`;
