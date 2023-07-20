import { Contact } from 'src/modules/contact/Contact';
import { Experiences } from 'src/modules/experiences/Experiences';
import { Landing } from 'src/modules/landing/Landing';
import { Projects } from 'src/modules/projects/Projects';
import { theme } from 'src/modules/theming/theme';
import { ThemeProvider, styled } from 'styled-components';
import './App.css';
import { animateRadialGradient } from 'src/modules/core/animateRadialGradient';
import { radialGradient } from 'src/modules/core/radialGradient';
import { SiteInProgress } from 'src/modules/core/SiteInProgress';

const Portfolio = () => {
    return (
        <ColoredBackgroundContainer>
            <Container>
                <Landing />
                <Experiences />
                <Projects />
                <Contact />
            </Container>
        </ColoredBackgroundContainer>
    );
};

function App() {
    const showSitePlaceholder = import.meta.env.PROD;
    return (
        <ThemeProvider theme={theme}>
            {showSitePlaceholder ? <SiteInProgress /> : <Portfolio />}
        </ThemeProvider>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
`;

const ColoredBackgroundContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    ${animateRadialGradient}
    ${radialGradient}
`;

export default App;
