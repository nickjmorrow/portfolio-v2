import { theme } from 'src/modules/theming';
import 'styled-components';

declare module 'styled-components' {
    export type DefaultTheme = typeof theme;
}
