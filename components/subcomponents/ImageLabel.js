import styles from '../../styles/components/subcomponents/ImageLabel.module.css';

function ImageLabel({ display, text, direction, length, positionX, positionY }) {
    return (
        <div className={styles.container} style={{ top: `${positionY}px`, left: `${positionX}px`, height: `${length}px` }} display={!display ? 'close' : ''}>
            <h6 style={{ paddingTop: direction === 'top' ? `${length - 5}px` : '', transform: `translateY(${display ? 0 : 20}px)`, opacity: display ? '1' : '0' }}>{text}</h6>
            <div style={ direction === 'top' ? { top: '-5px' } : { bottom: '-5px' }} />
        </div>
    );
}

export default ImageLabel;
