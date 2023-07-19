import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            main: string;
            secondary: string;
            text: string;
            accent: string;
        };
        fontFamily: {
            default: string;
        };
    }
}
