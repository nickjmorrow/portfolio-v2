import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const UnorderedList = styled.ul`
    padding-left: 0px;
    row-gap: ${theme.spacing.ss3};
    display: flex;
    flex-direction: column;
`;
