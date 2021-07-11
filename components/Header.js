import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

import LogoBlack from '../public/logo-black.png';
import LogoWhite from '../public/logo-white.png';

import Sidebar from './Sidebar';

import { t } from '../resources/Translations';  // cause error
import { deviceBreakpoint } from '../utilities/config';
import { useWindowDimensions } from '../utilities/customHooks';
import styles from '../styles/components/Header.module.css';

function Header({ mode, curSlide, bgColor, setScrolling }) {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    const [ hideMenu, setHideMenu ] = useState(false);
    const [ openSidebar, setOpenSidebar ] = useState(false);
    const [ backdropStyle, setBackdropStyle ] = useState({ width: 0, height: 0, left: 0, opacity: 0 });

    // get hide menu
    useEffect(() => {
        setHideMenu(mode === 'other' && curSlide !== 0);
    }, [mode, curSlide, width]);

    // on open sidebar 
    const handleOpenSidebar = (value) => {
        setOpenSidebar(value);
        setScrolling(!value);
    }

    // on mouse enter button
    const handleOnMouseEnter = (event) => {
        let nBackdropStyle = { ...backdropStyle };

        nBackdropStyle.width = event.target.offsetWidth;
        nBackdropStyle.height = event.target.offsetHeight;
        nBackdropStyle.left = event.target.offsetLeft;
        nBackdropStyle.transition = 'left 0s, opacity 0.5s';
        nBackdropStyle.opacity = 1;

        if (backdropStyle.opacity === 1)
            nBackdropStyle.transition = '0.5s';

        setBackdropStyle(nBackdropStyle);
    };

    return (
        <div>
            <header className={styles.container} onMouseLeave={(e) => setBackdropStyle({ ...backdropStyle, opacity: 0 })}>
                <div className={styles.backdrop} style={backdropStyle} />
                <div className={styles.logo} onClick={() => router.push('/', '/', { locale: router.locale })}>
                    <Image src={bgColor === 'white' ? LogoBlack : LogoWhite} alt='tesla-logo' />
                </div>
                {!hideMenu && width > deviceBreakpoint && <nav>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model 3</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model S</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model X</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model Y</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>{t('header.menu1')}</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>{t('header.menu2')}</button>
                </nav>}
                {!hideMenu && <button onMouseEnter={(e) => handleOnMouseEnter(e)} onClick={() => handleOpenSidebar(true)}>{t('button.menu')}</button>}
            </header>

            <Sidebar open={openSidebar} setOpen={handleOpenSidebar} />
        </div>
    );
}

export default Header;
