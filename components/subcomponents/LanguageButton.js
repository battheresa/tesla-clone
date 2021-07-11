import styles from '../../styles/components/subcomponents/LanguageButton.module.css';

function LanguageButton({ country, languages, changeRoute }) {
    return (
        <div className={styles.container}>
            <p>{country}</p>
            <span>
                {languages.map((item, i) => (
                    <a key={i} onClick={() => changeRoute(item.code)}>{item.language}</a>
                ))}
            </span>
        </div>
    );
}

export default LanguageButton;
