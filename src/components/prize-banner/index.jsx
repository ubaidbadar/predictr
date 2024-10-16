import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
// import PrizeWinnerModal from './PrizeWinnerModal';
// import Daimond_Large from '../../../icons-v2/Daimond_Large';
import SetSubscribeButton from './SetSubscribeButton';
import Winners from './winners';

let timer;


const PrizeBanner = (props) => {
    const [active, setActive] = useState(false);
    const handleTimer = (active = false) => {
        setActive(active);
        // clearInterval(timer);
        // timer = setInterval(() => {
        //     active = !active;
        //     setActive(active);
        // }, 5000);
    }
    useEffect(() => {
        handleTimer();
        return () => clearInterval(timer);
    }, [])
    return (
        <div className='mt-4 cont cont-sm overflow-hidden relative text-surface'>
            <div className={`relative flex ${styles.root}`} style={{ left: active ? '-100%' : '0' }}>

                <div className={`text-center md:text-left p-resp p-sm md:gap-y-0 gap-resp grid bg-primary-0 rounded-4 ${styles.banner1}`}>
                    <div>
                        <p className='text-secondary-0 leading-4 mt-4 md:mt-0 mb-2 font-bold'>Predict to win Monthly prizes</p>
                        <h1 className='font-extrabold text-3xl mb-resp'>$500, $300 and $200 for top three predictors.</h1>
                    </div>
                    <Winners />
                    <div className='flex-col lg:flex-row lg:gap-3 lg:-mt-12 md:-mt-6 [&>button]:mx-auto lg:[&>button]:w-[12.25rem] [&>button]:w-64'>
                        <button className='btn-primary bg-surface'>Monthly Winners</button>
                        <button
                            className='btn-primary bg-opacity-0 lg:bg-opacity-10 text-surface bg-surface'
                        >Contest details</button>
                        {/* <PrizeWinnerModal /> */}
                    </div>
                </div>
                
                <div className={`d-flex bg-secondary-0 flex-column align-items-md-center flex-md-row gap-3 p-4 pb-5 border-radius-8 ${styles.banner2}`}>
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