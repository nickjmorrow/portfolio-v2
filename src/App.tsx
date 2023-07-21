import { SiteInProgress } from 'src/modules/core/SiteInProgress';
import { Layout } from 'src/modules/main/Layout';
import { theme } from 'src/modules/theming/theme';
import { ThemeProvider } from 'styled-components';
import './App.css';

function App() {
    const showSitePlaceholder =
        import.meta.env.PROD || localStorage.getItem('showSiteAnyways');

    return (
        <ThemeProvider theme={theme}>
            {showSitePlaceholder ? <SiteInProgress /> : <Layout />}
        </ThemeProvider>
    );
}

export default App;
