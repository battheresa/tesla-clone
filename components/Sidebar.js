import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChevronLeft, X, Globe } from 'react-feather';

import LanguageButton from './subcomponents/LanguageButton';

import { t, currentLocale, allLocales } from '../resources/Translations';
import { useWindowDimensions } from '../utilities/customHooks';
import styles from '../styles/components/Sidebar.module.css';

function Sidebar({ open, setOpen }) {
    const router = useRouter();
    const { pathname } = router;

    const locale = currentLocale();
    const localeOptions = allLocales();
    const { width, height } = useWindowDimensions();

    const iconSize = 20;
    const [ menu, setMenu ] = useState(0);

    // handle on close sidebar
    const handleOnClose = () => {
        setOpen(false);
        setMenu(0);
    };

    // change language
    const changeLocale = (code) => {
        handleOnClose();
        router.push(pathname, pathname, { locale: code });
    };

    return (
        <div>
            <div className={styles.container} style={{ right: open ? '0' : '-310px', opacity: open ? '1' : '0', height: `${height}px` }}>
                
                {/* controller */}
                <div className={styles.controller} layout={menu === 1 ? 'between': ''}>
                    {menu === 1 && <button onClick={() => setMenu(0)}>
                        <ChevronLeft width={iconSize - 2} style={{ marginRight: '5px' }} />
                        {t('button.back')}
                    </button>}
                    <button onClick={() => handleOnClose()}><X width={iconSize} /></button>
                </div>

                {/* navigation */}
                {menu === 0 && <div className={styles.navigation}>
                    <nav>
                        <button>{t('menu.existingInventory')}</button>
                        <button>{t('menu.usedInventory')}</button>
                        <button>Powerwall</button>
                        <button>Cybertruck</button>
                        <button>Roadster</button>
                        <button>Semi</button>
                    </nav>
                    <button onClick={() => setMenu(1)}>
                        <Globe width={iconSize} />
                        <span style={{ alignSelf: 'center' }}>{locale.country}</span>
                        <a style={{ gridColumnStart: '2', width: 'fit-content' }}>{locale.language}</a>
                    </button>
                </div>}

                {/* language */}
                {menu === 1 && <div className={styles.language}>
                    <h3>North America</h3>
                    <LanguageButton country='Canada' languages={[ localeOptions.enus, localeOptions.fr ]} changeRoute={changeLocale} />
                    <LanguageButton country='México' languages={[ localeOptions.es ]} changeRoute={changeLocale} />
                    <LanguageButton country='Puerto Rico' languages={[ localeOptions.enus, localeOptions.es ]} changeRoute={changeLocale} />
                    <LanguageButton country='United States' languages={[ localeOptions.enus ]} changeRoute={changeLocale} />

                    <h3>Europe</h3>
                    <LanguageButton country='Belgium' languages={[ localeOptions.fr ]} changeRoute={changeLocale} />
                    <LanguageButton country='España' languages={[ localeOptions.es ]} changeRoute={changeLocale} />
                    <LanguageButton country='France' languages={[ localeOptions.fr ]} changeRoute={changeLocale} />
                    <LanguageButton country='Ireland' languages={[ localeOptions.enuk ]} changeRoute={changeLocale} />
                    <LanguageButton country='Switzerland' languages={[ localeOptions.fr ]} changeRoute={changeLocale} />
                    <LanguageButton country='United Kingdom' languages={[ localeOptions.enuk ]} changeRoute={changeLocale} />

                    <h3>Asia/Pacific</h3>
                    <LanguageButton country='Australia' languages={[ localeOptions.enus ]} changeRoute={changeLocale} />
                    <LanguageButton country='New Zealand' languages={[ localeOptions.enus ]} changeRoute={changeLocale} />
                    <LanguageButton country='Singapore' languages={[ localeOptions.enus ]} changeRoute={changeLocale} />
                    <LanguageButton country='Hong Kong' languages={[ localeOptions.enuk ]} changeRoute={changeLocale} />
                    <LanguageButton country='Macau' languages={[ localeOptions.enuk ]} changeRoute={changeLocale} />
                </div>}
            </div>

            {/* screen cover */}
            <div onClick={() => handleOnClose()} className={styles.screenCover} style={{ visibility: open ? 'visible' : 'hidden', opacity: open ? '1' : '0' }} />
        </div>
    );
}

export default Sidebar;
