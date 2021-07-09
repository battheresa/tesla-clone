import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import * as translations from '../resources/translations/';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const { locale, defaultLocale, pathname } = useRouter();
	const code = locale?.replace('-', '');
	const language = translations[code];
	const content = language[pathname];
	
	return (
		<IntlProvider locale={locale} defaultLocale={defaultLocale} messages={content}>
			<Component {...pageProps} />
		</IntlProvider>
	);
}

export default MyApp
