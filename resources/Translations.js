import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

const languageCode = {
    enus: { code: 'en-us', language: 'English' },
    enuk: { code: 'en-uk', language: 'English' },
    es: { code: 'es', language: 'Español' },
    fr: { code: 'fr', language: 'Français' },
}

const languageCountry = {
    enus: { code: 'en-us', language: 'English', country: 'United States' },
    enuk: { code: 'en-uk', language: 'English', country: 'United Kingdom' },
    es: { code: 'es', language: 'Español', country: 'España' },
    fr: { code: 'fr', language: 'Français', country: 'France' },
}

export const t = (id) => {
    const { formatMessage } = useIntl();
    return formatMessage({ id }) || '';
};

export const currentLocale = () => {
    const { locale } = useRouter();
    const id = locale.replace('-', '');
    return languageCountry[id];
};

export const allLocales = () => {
    return languageCode;
}