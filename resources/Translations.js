import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

const languages = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
};

const countries = {
    uk: 'United Kingdom',
    us: 'United States',
    es: 'España',
    fr: 'France',
};

export const t = (id) => {
    const { formatMessage } = useIntl();
    return formatMessage({ id }) || '';
};

export const currentLocale = () => {
    const { locale } = useRouter();
    const language = languages[locale.split('-')[0]];
    const country = countries[locale.includes('-') ? locale.split('-')[1] : locale];
    return { code: locale, language: language, country: country };
};