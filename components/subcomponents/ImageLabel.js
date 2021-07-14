import { useState, useEffect } from 'react';
import { Circle } from 'react-feather';
import styles from '../../styles/components/subcomponents/ImageLabel.module.css';

function ImageLabel({ text, direction, length, positionX, positionY }) {
    return (
        <div className={styles.container} style={{ top: `${positionY}px`, left: `${positionX}px`, height: `${length}px` }}>
            <h6 style={ direction === 'top' ? { paddingTop: `${length - 2}px` } : {}}>{text}</h6>
            <div style={ direction === 'top' ? { top: '-5px' } : { bottom: '-5px' }} />
        </div>
    );
}

export default ImageLabel;
