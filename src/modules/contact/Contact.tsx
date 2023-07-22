// external
import React from 'react';
import { Card } from 'src/modules/core/Card';
import { CardHeader } from 'src/modules/core/CardHeader';
import { Container } from 'src/modules/core/Container';
import { Section } from 'src/modules/core/Section';
import { Typography } from 'src/modules/core/Typography';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Contact: React.FC = () => {
    return (
        <Section
            id="contact"
            header="Contact"
            content={
                <Content>
                    I'm open to new opportunities for software engineering
                    roles. Email me at{' '}
                    <a href="mailto:njmorrow95@gmail.com">
                        njmorrow95@gmail.com
                    </a>
                    .
                </Content>
            }
        />
    );
};

const Content = styled(Typography)`
    display: block;
    line-height: 36px;
    color: ${theme.neutralColor.cs1};
`;
