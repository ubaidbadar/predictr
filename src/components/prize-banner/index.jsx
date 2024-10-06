import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
// import PrizeWinnerModal from './PrizeWinnerModal';
// import Daimond_Large from '../../../icons-v2/Daimond_Large';
import SetSubscribeButton from './SetSubscribeButton';
import Winner from './Winner';
import useGet from '../../hooks/useGet';

let timer;

const date = new Date();
date.setMonth(date.getMonth() - 1);
const month = date.toLocaleString('en-US', { month: 'long' }), year = date.getFullYear();

const Winners = () => {
    const { Loader, data } = useGet("/fetch_leaderboard_winners", { year, month });
    if (Loader) return <Loader className='m-auto text-surface' />
    return data.results.length > 0 && (
        <div className='flex sm:gap-3 gap-2 items-end'>
            {data.results.slice(0, 3).map((winner, i) => <Winner key={i} index={i} {...winner} />)}
            <div className='flex h-[7.7em] ml-2'>
                <small className='mb-auto w-0 h-0 origin-top-left text-xs text-nowrap rotate-90 flex'>Winners of July 2024</small>
            </div>
        </div>
    )
}

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
        <div className='mt-4 cont no-cont-sm overflow-hidden relative text-surface'>
            <div className={`relative flex ${styles.root}`} style={{ left: active ? '-100%' : '0' }}>
                <div className={`flex-between flex-col md:flex-row bg-primary-0 rounded-4 ${styles.banner1}`}>
                    <div>
                        <p className='text-secondary-0 leading-4 mb-2 font-bold'>Predict to win Monthly prizes</p>
                        <h1 className='font-extrabold text-3xl mb-inherit'>$500, $300 and $200 for top three predictors.</h1>
                        <div className='flex gap-3 [&>button]:w-[12.25rem]'>
                            <button className='btn-primary bg-surface'>Monthly Winners</button>
                            <button
                                className='btn-primary bg-opacity-10 text-surface bg-surface'
                            >Contest details</button>
                            {/* <PrizeWinnerModal /> */}
                        </div>
                    </div>
                    <Winners />
                </div>
                <div className={`d-flex bg-secondary-0 flex-column align-items-md-center flex-md-row gap-3 p-4 pb-5 border-radius-8 ${styles.banner2}`}>
                    {/* <Daimond_Large />
                    <div className='ms-auto'>
                        <small className='text-accent-1 overline'>People can now pay you for your research and predictions</small>
                        <h5 className='mt-1 mb-0'>Start earning for sharing your predictions.</h5>
                    </div> */}
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