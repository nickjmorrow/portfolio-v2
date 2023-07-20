// external
import React from 'react';
import { Card } from 'src/modules/core/Card';
import { CardHeader } from 'src/modules/core/CardHeader';
import { Container } from 'src/modules/core/Container';
import { Typography } from 'src/modules/core/Typography';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Contact: React.FC = () => {
    return (
        <Container id="contact">
            <Card>
                <CardHeader>Contact</CardHeader>
                <Content>
                    I'm open to new opportunities for software engineering
                    roles. Email me at{' '}
                    <a href="mailto:njmorrow95@gmail.com">
                        njmorrow95@gmail.com
                    </a>
                    .
                </Content>
            </Card>
        </Container>
    );
};

const Content = styled(Typography)`
    display: block;
    margin: ${theme.spacing.ss16} 0;
    line-height: 36px;
`;
