// external
import React, { useState } from 'react';
import { Card } from 'src/modules/core/Card';
import { CardHeader } from 'src/modules/core/CardHeader';
import { Container } from 'src/modules/core/Container';
import { data } from 'src/modules/core/data';
import { CurrentExperience } from 'src/modules/experiences/CurrentExperience';
import { ExperienceTimeline } from 'src/modules/experiences/ExperienceTimeline';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Experiences: React.FC = () => {
    const { experiences } = data;
    const sortedExperiences = experiences.sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
    const [activeExperience, setActiveExperience] = useState(
        sortedExperiences[0]
    );

    return (
        <>
            <CustomContainer id="experiences">
                <CustomCard>
                    <CardHeader>Experiences</CardHeader>
                    <Content>
                        <ExperienceTimeline
                            experiences={sortedExperiences}
                            activeExperience={activeExperience}
                            setActiveExperience={setActiveExperience}
                        />
                        <CurrentExperience experience={activeExperience} />
                    </Content>
                </CustomCard>
            </CustomContainer>
        </>
    );
};

const CustomContainer = styled(Container)``;

const CustomCard = styled(Card)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${theme.spacing.ss8};
    position: relative;
    top: -20px;
    min-height: 520px;
    background-color: rgba(255, 255, 255, 0.1);
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${theme.spacing.ss8};
    justify-content: center;
`;
