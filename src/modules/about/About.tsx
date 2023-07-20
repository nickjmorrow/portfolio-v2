// external
import React from 'react';
import styled from 'styled-components';
import { Card } from 'src/modules/core/Card';
import { theme } from 'src/modules/theming';
import { Skills } from 'src/modules/about/Skills';
import { Profile } from 'src/modules/about/Profile';
import { Container as OriginalContainer } from 'src/modules/core/Container';
import { CardHeader } from 'src/modules/core/CardHeader';

export const About: React.FC = () => {
    return (
        <Container id="about">
            <CustomCard>
                <CardHeader>About</CardHeader>
                <Bottom>
                    <Left>
                        <Content>
                            Hello! I'm Nick, and I live and work in Chicago. I'm
                            passionate about building beautiful web applications
                            with an emphasis on user experience and
                            accessibility. <br />
                            <br />
                            Shortly after graduating from University of Virginia
                            with an entirely unrelated Chemical Engineering
                            degree, I accrued software development experience in
                            fintech and healthcare domains.
                        </Content>
                        <Skills />
                    </Left>
                    <Profile />
                </Bottom>
            </CustomCard>
        </Container>
    );
};

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.ss8};
    flex-wrap: wrap;
`;

const Container = styled(OriginalContainer)`
    background-color: white;
    height: 60vh;
    z-index: 2;
`;

const Content = styled.div`
    font-family: ${theme.fontFamilies.default};
    max-width: 500px;
    line-height: 1.5rem;
    margin-bottom: ${theme.spacing.ss8};
`;

const Left = styled.div``;

const CustomCard = styled(Card)`
    display: flex;
    flex-direction: column;
`;
