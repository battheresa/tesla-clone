import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

import { t } from '../resources/Translations';
import { useWindowDimensions } from '../utilities/customHooks';

function Home() {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const [ slide, setSlide ] = useState(0);

    // update current slide
    const handleOnScroll = (offset) => {
        const benchmark = height / 2;
        setSlide(0);

        for (let i = 0; i < 6; i++) {
            const range = [(height * i) - benchmark, (height * i) + benchmark];

            if (offset > range[0] && offset < range[1]) {
                setSlide(i);
                break;
            }
        }
    };
    
    return (
        <div className={styles.container} style={{ height: `${height}px` }} onScroll={(e) => handleOnScroll(e.target.scrollTop)}>
            <Head>
                <title>Tesla Clone</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />

            <main className={styles.sections}>
                <section style={{ height: `${height}px` }} color='primary'>
                    <h1>Model S</h1>
                </section>
                <section style={{ height: `${height}px` }} color='secondary'>
                    <h1>Model X</h1>
                </section>
                <section style={{ height: `${height}px` }} color='tertiary'>
                    <h1>Model Y</h1>
                </section>
                <section style={{ height: `${height}px` }} color='secondary'>
                    <h1>Model 3</h1>
                </section>
                <section style={{ height: `${height}px` }} color='tertiary'>
                    <h1>Powerwall</h1>
                </section>
                <section style={{ height: `${height}px` }} color='primary'>
                    <h1>Accessories</h1>
                </section>
            </main>
            
            <Footer open={slide === 5} />
        </div>
    );
}

export default Home;