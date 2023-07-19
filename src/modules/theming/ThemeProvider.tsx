import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from 'src/modules/theming/theme';
/**
 * Theme that is consumed by styled-components.
 */
export const ThemeProvider: React.FC = ({ children }) => {
    return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
