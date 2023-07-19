import { styled } from 'styled-components';
import { Section } from '../../shared/section/Section';
import { Experience, experiences } from '../../data';
import { useEffect, useRef, useState } from 'react';
import { ExperienceDetails } from './components/experience-details/ExperienceDetails';
import { Timeline } from './components/timeline/Timeline';
import { Card } from '../../shared/card/Card';

interface Props {}

const getExperienceDuration = (experience: Experience): number => {
    if (experience.endDate === null) {
        const today = new Date();
        return today - experience.startDate;
    }
    return experience.endDate - experience.startDate;
};

const getAllExperiencesDuration = (): number => {
    return experiences.reduce((aggregator, currentExperience) => {
        aggregator += getExperienceDuration(currentExperience);
        return aggregator;
    }, 0);
};

const getExperienceRatio = (experience: Experience): number => {
    const experienceDuration = getExperienceDuration(experience);
    const allExperiencesDuration = getAllExperiencesDuration();
    return (experienceDuration / allExperiencesDuration).toFixed(2);
};

export const Experiences = ({}: Props) => {
    const [selectedExperience, setSelectedExperience] = useState(
        experiences[experiences.length - 1]
    );

    const onSelectExperience = (experience: Experience) =>
        setSelectedExperience(experience);

    return (
        <Section>
            <Card>
                <Container>
                    <Timeline
                        experiences={experiences}
                        selectedExperience={selectedExperience}
                        onSelectExperience={onSelectExperience}
                    />
                    <ExperienceDetails experience={selectedExperience} />
                </Container>
            </Card>
        </Section>
    );
};

const Container = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: row;
    height: 100%;
    column-gap: 32px;
`;
