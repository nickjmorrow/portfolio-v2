import { UnorderedListItem } from 'src/modules/core/UnorderedListItem';
import { Text } from 'src/modules/core/Text';
import { ExperienceDetail as ExperienceDetailType } from 'src/modules/core/types';
import styled from 'styled-components';

interface Props {
    experienceDetail: ExperienceDetailType;
}

export const ExperienceDetail = ({ experienceDetail }: Props) => {
    return (
        <Container>
            <StyledText>{experienceDetail.description}</StyledText>
        </Container>
    );
};

const Container = styled(UnorderedListItem)`
    line-height: 1.6rem;
`;

const StyledText = styled(Text)`
    opacity: 0.7;
`;
