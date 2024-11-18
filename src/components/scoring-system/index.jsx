import React from 'react';
import styles from './styles.module.scss';
import Modal from '../../ui/modal/modal';

const ScoringSystemModal = props => (
    <Modal title="Scoring system"
        state="active"
        component={tools => <></>}
        {...props}
        className="text-gray-1"
    >
        <p>The accuracy of your guess will be in percentage. “What percentage of your guess is correct?”</p>
        <div>
            <b>Formula</b>
            <div className='bg-light-7 p-4 rounded-3'>
                <p>If your guess (%) < actual movement (%) then,</p>
            </div>
        </div>
    </Modal>
)

export default ScoringSystemModal;