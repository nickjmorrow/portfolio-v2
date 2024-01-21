// external
import React from 'react';
import { Section } from 'src/modules/core/Section';
import { Text } from 'src/modules/core/Text';
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

const Content = styled(Text)`
    display: block;
    line-height: 1.7;
    color: ${theme.neutralColor.cs1};
`;
