import styled from 'styled-components';
import { Experience } from '../../../../data';

interface Props {
    experience: Experience;
}

export const ExperienceDetails = ({ experience }: Props) => {
    return (
        <Container>
            <Header>
                {experience.roleName} at {experience.name}
            </Header>
            <Dates>September 2020 - May 2022</Dates>
            <ExperienceDetailList>
                {experience.experienceDetails.map((experienceDetail) => {
                    return (
                        <ExperienceDetailListItem
                            key={experienceDetail.experienceDetailId}
                        >
                            {experienceDetail.description}
                        </ExperienceDetailListItem>
                    );
                })}
            </ExperienceDetailList>
        </Container>
    );
};

const Header = styled.div`
    font-size: 18px;
`;

const Dates = styled.div`
    font-size: 14px;
`;

const ExperienceDetailList = styled.ul`
    padding: 0;
`;

const ExperienceDetailListItem = styled.li`
    font-size: 16px;
`;

const Container = styled.div`
    min-width: 500px;
    color: ${(p) => p.theme.colors.text};
    font-family: ${(p) => p.theme.fontFamily.default};
`;
