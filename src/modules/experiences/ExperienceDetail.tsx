import { ExperienceDetail as ExperienceDetailType } from 'src/modules/core/types';
import styled from 'styled-components';

interface Props {
    experienceDetail: ExperienceDetailType;
}

export const ExperienceDetail = ({ experienceDetail }: Props) => {
    return <Container>{experienceDetail.description}</Container>;
};

const Container = styled.span``;
