// external
import React from 'react';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Landing: React.FC = () => {
    return (
        <Container>
            <Name>Nicholas Morrow</Name>
            <CurrentPosition>
                Senior Front End Engineer at Zenlytic
            </CurrentPosition>
            <Tagline>I build frontend</Tagline>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss2};
`;

const Name = styled.span`
    font-size: ${theme.fontSizes.fs9};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
    font-weight: 700;
    letter-spacing: 2px;
`;

const CurrentPosition = styled.span`
    font-family: ${theme.fontFamilies.default};
    font-size: ${theme.fontSizes.fs5};
    color: ${theme.backgroundColor};
    font-weight: ${theme.fontWeights.fw5};
`;

const Tagline = styled.span`
    font-family: ${theme.fontFamilies.default};
`;
