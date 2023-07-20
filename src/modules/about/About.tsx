// external
import React from 'react';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const About: React.FC = () => {
    return (
        <Container id="about">
            <ParagraphListContainer>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet porttitor eget dolor morbi non arcu. Mollis
                    aliquam ut porttitor leo a diam sollicitudin.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Posuere urna nec tincidunt praesent semper.
                    Consectetur adipiscing elit ut aliquam. Donec ac odio tempor
                    orci.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Dolor sit amet consectetur adipiscing elit duis
                    tristique.
                </Paragraph>
            </ParagraphListContainer>
        </Container>
    );
};

const Container = styled.div``;

const ParagraphListContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss4};
`;

const Paragraph = styled.p`
    margin: 0;
`;
