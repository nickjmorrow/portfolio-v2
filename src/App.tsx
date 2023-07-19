import { ThemeProvider, styled } from 'styled-components';
import './App.css';
import { About } from 'src/modules/about/About';
import { Contact } from 'src/modules/contact/Contact';
import { Experiences } from 'src/modules/experiences/Experiences';
import { Landing } from 'src/modules/landing/Landing';
import { Projects } from 'src/modules/projects/Projects';
import { theme } from 'src/modules/theming/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Landing />
                <About />
                <Experiences />
                <Projects />
                <Contact />
            </Container>
        </ThemeProvider>
    );
}

const Container = styled.div`
    background: white;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
`;

export default App;
