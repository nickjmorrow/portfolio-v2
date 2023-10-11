import { Tag } from 'src/modules/core/Tag';
import { Text } from 'src/modules/core/components/text/Text';
import { getFormattedDate } from 'src/modules/core/date.utils';
import {
    ExperienceDetail as ExperienceDetailType,
    Experience as ExperienceType,
    Technology,
} from 'src/modules/core/types';
import { ExperienceDetail } from 'src/modules/experiences/ExperienceDetail';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

interface Props {
    experience: ExperienceType;
}

export const Experience = ({ experience }: Props) => {
    const renderExperienceDetail = (
        experienceDetail: ExperienceDetailType,
        index: number
    ) => <ExperienceDetail experienceDetail={experienceDetail} key={index} />;

    const formattedStartDate = getFormattedDate(experience.startDate);
    const formattedEndDate = getFormattedDate(experience.endDate);

    const renderExperienceTechnology = (
        experienceTechnology: Technology,
        index: number
    ) => <Tag label={experienceTechnology.name} key={index} />;

    return (
        <Container>
            <Dates>
                {formattedStartDate} - {formattedEndDate}
            </Dates>
            <ExperienceInfoContainer>
                <Heading>
                    <Title>{experience.roleName}</Title> at{' '}
                    <CompanyName>{experience.name}</CompanyName>
                </Heading>
                <ExperienceDetailList>
                    {experience.experienceDetails.map(renderExperienceDetail)}
                </ExperienceDetailList>
                <ExperienceTechnologyList>
                    {experience.technologies.map(renderExperienceTechnology)}
                </ExperienceTechnologyList>
            </ExperienceInfoContainer>
        </Container>
    );
};

const ExperienceTechnologyList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    column-gap: ${theme.spacing.ss4};
`;

const Container = styled.div`
    display: flex;
`;

const Dates = styled(Text)`
    min-width: 200px;
    font-family: ${theme.fontFamilies.default};
    opacity: 0.8;
    font-size: ${theme.fontSizes.fs2};
`;

const ExperienceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss4};
    max-width: 600px;
    position: relative;
    top: -3px;
`;

const Title = styled.span``;

const Heading = styled(Text)`
    font-size: ${theme.fontSizes.fs5};
    font-weight: ${theme.fontWeights.fw5};
`;

const CompanyName = styled.span``;

const ExperienceDetailList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss2};
    font-size: ${theme.fontSizes.fs2};
`;
