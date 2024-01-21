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

const HORIZONTAL_SPACING = theme.spacing.ss32;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: ${theme.spacing.ss24};
    margin-left: ${HORIZONTAL_SPACING};
    @media (max-width: 800px) {
        flex-direction: column;
        column-gap: 0px;
        height: auto;
    }
`;

const PADDING_TOP = theme.spacing.ss32;

const LeftSide = styled.div`
    min-width: 500px;
    position: fixed;
    height: 100vh;
    padding-top: ${PADDING_TOP};
    top: -18px;
`;

const RightSide = styled.div`
    padding-top: ${PADDING_TOP};
    @media (max-width: 800px) {
        max-height: unset;
    }
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss64};
    margin-left: 600px;
    padding-right: ${HORIZONTAL_SPACING};
    padding-bottom: ${theme.spacing.ss16};
`;

const ColoredBackgroundContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    ${animateRadialGradient}
    ${radialGradient}
`;
