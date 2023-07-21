import { getFormattedDate } from 'src/modules/core/date.utils';
import {
    ExperienceDetail as ExperienceDetailType,
    Experience as ExperienceType,
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
            </ExperienceInfoContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const Dates = styled.div`
    min-width: 200px;
`;

const ExperienceInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss4};
    max-width: 600px;
`;

const Title = styled.span``;

const Heading = styled.span`
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
