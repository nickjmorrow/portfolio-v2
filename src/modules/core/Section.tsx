import { theme } from 'src/modules/theming';
import styled from 'styled-components';

interface Props {
    header: string;
    content: React.ReactNode;
    id: string;
}

export const Section = ({ id, header, content }: Props) => {
    return (
        <Container id={id}>
            <Header>{header}</Header>
            <ContentContainer>{content}</ContentContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss4};
`;

const Header = styled.h2`
    text-transform: uppercase;
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fw7};
`;

const ContentContainer = styled.div``;
