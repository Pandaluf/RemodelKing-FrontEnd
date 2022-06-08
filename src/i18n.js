import {createI18n} from "vue-i18n";
import en from "./local/en.json";
import es from "./local/es.json";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: { en, es }
});

export default i18n;
