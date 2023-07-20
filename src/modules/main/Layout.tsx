import { About } from 'src/modules/about';
import { Contact } from 'src/modules/contact';
import { animateRadialGradient } from 'src/modules/core/animateRadialGradient';
import { radialGradient } from 'src/modules/core/radialGradient';
import { Experiences } from 'src/modules/experiences';
import { Landing } from 'src/modules/landing';
import { Projects } from 'src/modules/projects';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Layout = () => {
    return (
        <ColoredBackgroundContainer>
            <Container>
                <LeftSide>
                    <Landing />
                </LeftSide>
                <RightSide>
                    <About />
                    <Experiences />
                    <Projects />
                    <Contact />
                </RightSide>
            </Container>
        </ColoredBackgroundContainer>
    );
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    column-gap: ${theme.spacing.ss32};
    margin: 0 ${theme.spacing.ss32};
`;

const PADDING_TOP = theme.spacing.ss32;

const LeftSide = styled.div`
    width: max-content;
    padding-top: ${PADDING_TOP};
`;

const RightSide = styled.div`
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss64};
    padding-top: ${PADDING_TOP};
`;

const ColoredBackgroundContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    ${animateRadialGradient}
    ${radialGradient}
`;
