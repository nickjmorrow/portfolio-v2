// external
import React from 'react';
import { Header } from 'src/modules/landing/Header';
import { theme } from 'src/modules/theming';
import styled, { keyframes } from 'styled-components';

export const Landing: React.FC = () => {
    return (
        <>
            <Container>
                <Header />
                <ContentContainer>
                    <Name>Nicholas Morrow</Name>
                    <About>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Sit amet porttitor eget dolor
                            morbi non arcu. Mollis aliquam ut porttitor leo a
                            diam sollicitudin.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Posuere urna nec tincidunt
                            praesent semper. Consectetur adipiscing elit ut
                            aliquam. Donec ac odio tempor orci.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Dolor sit amet consectetur
                            adipiscing elit duis tristique.
                        </Paragraph>
                    </About>
                </ContentContainer>
            </Container>
        </>
    );
};

const Paragraph = styled.p``;

const ContentContainer = styled.div`
    position: relative;
    top: 20%;
    left: 10%;
    width: 100%;
    display: flex;
    column-gap: ${theme.spacing.ss16};
    height: max-content;
`;

const Container = styled.div`
    height: 100vh;
`;

const Name = styled.span`
    font-size: ${theme.fontSizes.fs11};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
    font-weight: 700;
    letter-spacing: 2px;
`;

const About = styled.div`
    max-width: 600px;
`;
