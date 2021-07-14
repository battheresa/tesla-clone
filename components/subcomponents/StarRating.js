import { Star } from 'react-feather';
import styles from '../../styles/components/subcomponents/StarRating.module.css';

function StarRating({ title, description, rating }) {
    return (
        <div className={styles.container}>
            <span className={styles.text}>
                <h5>{title}</h5>
                <h6>{description}</h6>
            </span>
            <span className={styles.rating}>
                {Array(rating).fill().map((_, i) => (
                    <Star key={i} color='var(--grey008)' fill='var(--grey008)' width={16} height={16} style={{ marginLeft: '5px' }} />
                ))}
            </span>
        </div>
    );
}

export default StarRating;
