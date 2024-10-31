import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
// import PrizeWinnerModal from './PrizeWinnerModal';
// import Daimond_Large from '../../../icons-v2/Daimond_Large';
import SetSubscribeButton from './SetSubscribeButton';
import First from './banners/1';

let timer;


const PrizeBanner = (props) => {
    const [active, setActive] = useState(false);
    const handleTimer = (active = false) => {
        setActive(active);
        clearInterval(timer);
        timer = setInterval(() => {
            active = !active;
            setActive(active);
        }, 5000);
    }
    useEffect(() => {
        handleTimer();
        return () => clearInterval(timer);
    }, [])
    return (
        <div className='md:mx-cont lg:mt-4 md:mt-3 mt-2 mx-2 overflow-hidden relative text-surface'>
            <div className={`relative flex ${styles.root}`} style={{ left: active ? '-100%' : '0' }}>
                <First />                
                <div className={`d-flex bg-secondary-0 mr-auto flex-column align-items-md-center flex-md-row gap-3 p-4 pb-5 border-radius-8 ${styles.banner2}`}>
                    <SetSubscribeButton {...props} />
                </div>
            </div>
            <div className={`${styles.btns} text-exs absolute position-center bottom-1`}>
                <button
                    onClick={() => handleTimer(false)}
                    disabled={!active}
                    className={`btn-icon ${active ? styles.active : ''}`}
                />
                <button
                    onClick={() => handleTimer(true)}
                    disabled={active}
                    className="btn-icon"
                />
            </div>
        </div>
    )
}


export default PrizeBanner;