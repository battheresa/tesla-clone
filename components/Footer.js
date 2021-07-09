import { t } from '../resources/Translations';
import styles from '../styles/Footer.module.css';

function Footer({ open }) {
    return (
        <footer className={styles.container} style={{ opacity: open ? '1' : '0' }}>
            <h6>Chawisa Lo &copy; 2021. {t('footer.credit')}&nbsp;
                <a href='https://www.tesla.com/?redirect=no' target='_blank' style={{ fontSize: '1em', fontWeight: '500' }}>Tesla {t('footer.link')}</a>.
            </h6>
        </footer>
    );
}

export default Footer;
