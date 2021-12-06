import { useState, useEffect } from 'react';
import styles from '../../styles/components/subcomponents/SpecsInfo.module.css';

import { model3Specs } from '../../utilities/config';

function SpecsInfo({ open, menu }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (menu) {
            case 'performance':
                setData(model3Specs.performance);
                break;
            case 'awd':
                setData(model3Specs.awd);
                break;
            case 'rwd':
                setData(model3Specs.rwd);
                break;
        }
    }, []);

    return (
        <div className={styles.container} style={{ display: open ? 'grid' : 'none' }}>
            <div className={styles.column} style={{ left: '5px' }}>
                {data.slice(0, 6).map((item, i) => (
                    <div>
                        <p>{item.title}</p>
                        {item.description.split('\n').map(sentence => (
                            sentence[0] === '*' ? <p><i>{sentence}</i></p> : <p>{sentence}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.column} style={{ right: '-5px' }}>
                {data.slice(6).map((item, i) => (
                    <div>
                        <p>{item.title}</p>
                        {item.description.split('\n').map(sentence => (
                            sentence[0] === '*' ? <p><i>{sentence}</i></p> : <p>{sentence}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecsInfo;
