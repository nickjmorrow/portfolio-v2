// external
import React from 'react';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Landing: React.FC = () => {
    return (
        <>
            <Container>
                <Name>Nicholas Morrow</Name>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: max-content;
    position: relative;
`;

const Name = styled.span`
    font-size: ${theme.fontSizes.fs11};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
    font-weight: 700;
    letter-spacing: 2px;
`;
