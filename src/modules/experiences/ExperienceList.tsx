import { Experience as ExperienceType } from 'src/modules/core/types';
import { Experience } from 'src/modules/experiences/Experience';
import { getSortedExperiences } from 'src/modules/experiences/utils/getSortedExperiences';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

interface Props {
    experiences: ExperienceType[];
}

export const ExperienceList = ({ experiences }: Props) => {
    const sortedExperiences = getSortedExperiences(experiences);

    return (
        <Container>
            {sortedExperiences.map((experience) => (
                <Experience
                    key={experience.experienceId}
                    experience={experience}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss8};
`;
