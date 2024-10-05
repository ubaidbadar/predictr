import React from 'react';
import styles from './styles.module.scss';
import Modal from '../../ui/modal/modal';

const ScoringSystemModal = props => (
    <Modal title="Scoring system"
        actions={close => <button className='btn-primary btn' onClick={close}>Understood 👍</button>}
        {...props}
    >
        <p className="m-0">The accuracy of your guess will be in percentage. “What percentage of your guess is correct?”</p>
        <div className="small">
            <b className="fw-semibold">Formula:</b>
            <div className="border border-radius-8 mt-2 p-3">
                <p className="mt-0 mb-2">{"If your guess (%) < actual movement (%) then,"}</p>
                <div className="d-flex align-items-center gap-3">
                    <b className="fw-semibold">Accuracy (%)</b>
                    <p className="m-0">=</p>
                    <div className="text-center">
                        <p className="m-0">Your guess (%)</p>
                        <hr />
                        <p className="m-0">Actual movement (%)</p>
                    </div>
                    <p className="m-0">* 100</p>
                </div>
                <p className='mt-4 mb-2'>{"If your guess (%) >= actual movement (%) then,"}</p>
                <div className="d-flex align-items-center gap-3">
                    <b className="fw-semibold">Accuracy (%)</b>
                    <p className="m-0">=</p>
                    <div className="text-center">
                        <p className="m-0">Actual movement (%)</p>
                        <hr />
                        <p className="m-0">Your guess (%)</p>
                    </div>
                    <p className="m-0">* 100</p>
                </div>
                <p className='my-4'>If the stock movement is in opposite direction than your guess then that accuracy is 0%.</p>
                <p className='mb-2'>Let's say, your guess was 5% up and if actual movement is</p>
                <ul className={`border-radius-8 bg-primary-lighten-5 list-unstyled ${styles.root}`}>
                    <li className='text-accent-4' movement="Actual Movement" accuracy="Accuracy">Calculation</li>
                    <li movement="3% down" accuracy="0%">Opposite trend</li>
                    <li movement="4% up" accuracy="80%">(4 / 5) * 100</li>
                    <li movement="5% up" accuracy="100%">(5 / 5) * 100</li>
                    <li movement="6% up" accuracy="83.3%">(5 / 6) * 100</li>
                </ul>
            </div>
        </div>
    </Modal>
)

export default ScoringSystemModal;