// external
import styled from 'styled-components';
import { theme } from 'src/modules/theming';

export const Container = styled.div`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: ${theme.backgroundColor};
    position: relative;
    z-index: 1;
`;
