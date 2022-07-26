import { ThemeManager } from "./theme";
import { LanguageManager } from "./lang";
import Hotjar from '@hotjar/browser';

export interface IApp {
    name: string,
    author: {
        name: string,
        link: string
    }
}

export function AppSetup() {
    // declare app information
    const app: IApp = {
        name: 'Nuxt 3 Awesome Starter',
        author: {
            name: 'SuperService',
            link: 'https://github.com/SuperService'
        }
    }

    useState('app', () => app)

    const siteId = 3081703;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);

    // use theme manager
    const themeManager = ThemeManager();

    // use language manager
    const languageManager = LanguageManager();

    return {
        app,
        themeManager,
        languageManager
    }
}