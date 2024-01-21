import { UnorderedListItem } from 'src/modules/core/UnorderedListItem';
import { ExperienceDetail as ExperienceDetailType } from 'src/modules/core/types';
import styled from 'styled-components';

interface Props {
    experienceDetail: ExperienceDetailType;
}

export const ExperienceDetail = ({ experienceDetail }: Props) => {
    return <Container>{experienceDetail.description}</Container>;
};

const Container = styled(UnorderedListItem)`
    line-height: 1.6rem;
`;
