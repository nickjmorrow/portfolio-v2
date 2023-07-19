// external
import styled from 'styled-components';
import { theme } from 'src/modules/theming/theme';

export const Card = styled.div`
    box-shadow: ${theme.boxShadow.bs3};
    border-radius: ${theme.borderRadius.br1};
    background-color: hsla(0, 0%, 100%, 1);
    z-index: 1;
    padding: ${theme.spacing.ss8};
`;
