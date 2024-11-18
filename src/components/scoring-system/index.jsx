import React from 'react';
import styles from './styles.module.scss';
import Modal from '../../ui/modal/modal';

const Item = (props) => (
    <div>
        <p className='mb-2'>{props.title}</p>
        <div className='flex-center text-dark-2 font-medium text-center gap-3 px-4'>
            <p>Accuracy (%) =</p>
            <div>
                {props.top} (%)
                <hr className='my-1' />
                {props.bottom} (%)
            </div>
            <p>*100</p>
        </div>
    </div>
)

const ScoringSystemModal = props => (
    <Modal title="Scoring system"
        id="Scoring System Modal"
        component={tools => <button onClick={tools.open} className='hidden' id='Scoring System Modal Open'></button>}
        {...props}
        className="text-gray-1"
    >
        <p>The accuracy of your guess will be in percentage. “What percentage of your guess is correct?”</p>
        <div>
            <b className='text-dark-1'>Formula:</b>
            <div className='bg-light-7 p-4 rounded-3 flex-col gap-3 mt-2'>
                <Item
                    title="If your guess (%) < actual movement (%) then,"
                    top="Your guess"
                    bottom="Actual movement"
                />
                <Item
                    title="If your guess (%) >= actual movement (%) then,"
                    bottom="Your guess"
                    top="Actual movement"
                />
                <p>If the stock movement is in opposite direction than your guess then that accuracy is 0%.</p>
                <p>Let's say, your guess was 5% up and if actual movement is</p>
                <div className={`bg-primary-2 rounded-2 ${styles.footer}`}>
                    <p aria-label='Actual Movement' aria-details='Accuracy'>Calculation</p>
                    <p aria-label='3% down' aria-details='0%'>Opposite trend</p>
                    <p aria-label='4% up' aria-details='80%'>(4 / 5) * 100</p>
                    <p aria-label='5% up' aria-details='100%'>(5 / 5) * 100</p>
                    <p aria-label='6% up' aria-details='83.3%'>(5 / 6) * 100</p>
                </div>
            </div>
        </div>
        <label htmlFor="Scoring System Modal" className='btn-primary ml-auto'>Understood 👍</label>
    </Modal>
)

export default ScoringSystemModal;