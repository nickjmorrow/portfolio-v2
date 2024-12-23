import { UnorderedList } from 'src/modules/core/UnorderedList';
import { UnorderedListItem } from 'src/modules/core/UnorderedListItem';
import { Text } from 'src/modules/core/Text';
import { theme } from 'src/modules/theming';
import styled, { css } from 'styled-components';

export const About = () => {
    return (
        <Container id="about">
            <ParagraphListContainer>
                <AboutText>
                    Hi! My name's Nick. I live in the United States and work
                    remotely. I do frontend software development. I like making
                    web apps that are fun to use and feel a bit like magic
                    paper.
                </AboutText>
                <AboutText>
                    For any new opportunities, I'm particularly looking for the
                    following:
                </AboutText>
            </ParagraphListContainer>
            <UnorderedList>
                <AboutListItem>
                    <AboutSubText>
                        React + TypeScript codebase (or willing to migrate)
                    </AboutSubText>
                </AboutListItem>
                <AboutListItem>
                    <AboutSubText>Remote</AboutSubText>
                </AboutListItem>
                <AboutListItem>
                    <AboutSubText>4-day work week</AboutSubText>
                </AboutListItem>
            </UnorderedList>
        </Container>
    );
};

const OPACITY = 0.8;

const AboutListItem = ({ children }: { children: React.ReactNode }) => (
    <UnorderedListItem bulletStyles={{ opacity: OPACITY }}>
        {children}
    </UnorderedListItem>
);

const aboutStyles = css`
    opacity: ${OPACITY};
    font-size: ${theme.fontSizes.fs5};
    font-weight: ${theme.fontWeights.fw4};
`;

const AboutText = styled(Text)`
    ${aboutStyles}
    line-height: 1.45;
`;

const AboutSubText = styled(AboutText)`
    font-size: ${theme.fontSizes.fs3};
`;

const Container = styled.div``;

const ParagraphListContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss6};
    max-width: 600px;
`;
