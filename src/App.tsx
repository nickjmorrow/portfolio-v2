import { Layout } from 'src/modules/main/Layout';
import { theme } from 'src/modules/theming/theme';
import { ThemeProvider } from 'styled-components';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    );
}

export default App;
