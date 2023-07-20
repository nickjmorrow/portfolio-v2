import React from 'react';
import { theme } from 'src/modules/theming/theme';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
/**
 * Theme that is consumed by styled-components.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
