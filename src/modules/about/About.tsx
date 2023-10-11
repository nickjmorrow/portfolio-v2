import { Text } from 'src/modules/core/components/text/Text';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const About = () => {
    return (
        <Container id="about">
            <ParagraphListContainer>
                <AboutText>
                    Hi! My name's Nick, I like and do web development. I like
                    making web apps that feel polished, a bit like magic paper.
                    Animations, jank prevention, pretty CSS.
                </AboutText>
                <AboutText>
                    I'm not actively looking for new jobs right now, but feel
                    free to contact me.
                </AboutText>
                <AboutText>
                    I'm particularly looking for the following:
                </AboutText>
                <Ul>
                    <Li>
                        <ListItemText>
                            - React + TypeScript codebase (or willing to
                            migrate)
                        </ListItemText>
                    </Li>
                    <Li>
                        <ListItemText>- Remote</ListItemText>
                    </Li>
                    <Li>
                        <ListItemText>- 4-day work week</ListItemText>
                    </Li>
                </Ul>
            </ParagraphListContainer>
        </Container>
    );
};

const AboutText = styled(Text)`
    opacity: 0.9;
`;

const ListItemText = styled(AboutText)`
    font-size: ${theme.fontSizes.fs3};
`;

const Container = styled.div``;

const ParagraphListContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss4};
    max-width: 600px;
`;

const Ul = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
`;

const Li = styled.li`
    list-style: none;
`;
