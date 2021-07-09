import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

import Sidebar from './Sidebar';

import { t } from '../resources/Translations';
import Logo from '../resources/images/logo.png';

import styles from '../styles/Header.module.css';

function Header() {
    const [ openSidebar, setOpenSidebar ] = useState(false);
    const [ backdropStyle, setBackdropStyle ] = useState({ width: 0, height: 0, left: 0, opacity: 0 });


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
                <div className={styles.logo}>
                    <Image src={Logo} alt='tesla-logo' />
                </div>
                <nav>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model 3</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model S</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model X</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Model Y</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Solar Roof</button>
                    <button onMouseEnter={(e) => handleOnMouseEnter(e)}>Solar Panels</button>
                </nav>
                <button onMouseEnter={(e) => handleOnMouseEnter(e)} onClick={() => setOpenSidebar(true)}>Menu</button>
            </header>

            <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
        </div>
    );
}

export default Header;
