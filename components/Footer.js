import { t } from '../resources/Translations';
import styles from '../styles/components/Footer.module.css';

function Footer({ open, bgColor }) {
    return (
        <footer className={styles.container} style={{ opacity: open ? '1' : '0', bottom: open ? '0' : '-70px' }}>
            <h6 style={{ color: bgColor === 'black' ? 'var(--white)' : 'var(--black)' }}>Chawisa Lo &copy; 2021. &nbsp;</h6>
            <h6 style={{ color: bgColor === 'black' ? 'var(--white)' : 'var(--black)' }}>{t('footer.credit')}&nbsp;
                <a href='https://www.tesla.com/?redirect=no' target='_blank' color={bgColor === 'black' ? 'reverse' : ''} style={{ fontSize: '1em', fontWeight: '500' }}>Tesla {t('footer.link')}</a>.
            </h6>
        </footer>
    );
}

export default Footer;
