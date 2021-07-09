import { useState, useEffect } from 'react';
import { ChevronLeft, X, Globe } from 'react-feather';

import { t, currentLocale } from '../resources/Translations';
import styles from '../styles/Sidebar.module.css';

function Sidebar({ open, setOpen }) {
    const locale = currentLocale();
    const iconSize = 20;
    const [ menu, setMenu ] = useState(1);

    return (
        <div>
            <div className={styles.container} style={{ right: open ? '0' : '-280px', opacity: open ? '1' : '0' }}>
                
                {/* controller */}
                <div className={styles.controller} layout={menu === 1 ? 'between': ''}>
                    {menu === 1 && <button onClick={() => setMenu(0)}>
                        <ChevronLeft width={iconSize - 2} style={{ marginRight: '5px' }} />Back
                    </button>}
                    <button onClick={() => setOpen(false)}><X width={iconSize} /></button>
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
                    <div onClick={() => setMenu(1)}>
                        <p>Country</p>
                        <span>
                            <a style={{ gridColumnStart: '2', width: 'fit-content' }}>Language 1</a>
                            <a style={{ gridColumnStart: '2', width: 'fit-content' }}>Language 2</a>
                        </span>
                    </div>
                    <div onClick={() => setMenu(1)}>
                        <p>Country</p>
                        <span>
                            <a style={{ gridColumnStart: '2', width: 'fit-content' }}>Language 1</a>
                            <a style={{ gridColumnStart: '2', width: 'fit-content' }}>Language 2</a>
                        </span>
                    </div>

                    <h3>Europe</h3>
                    <div onClick={() => setMenu(1)}>
                        <p>Country</p>
                        <span>
                            <a style={{ gridColumnStart: '2', width: 'fit-content' }}>Language 1</a>
                            <a style={{ gridColumnStart: '2', width: 'fit-content' }}>Language 2</a>
                        </span>
                    </div>
                </div>}
            </div>


            {/* screen cover */}
            <div onClick={() => setOpen(false)} className={styles.screenCover} style={{ visibility: open ? 'visible' : 'hidden', opacity: open ? '1' : '0' }} />
        </div>
    );
}

export default Sidebar;
