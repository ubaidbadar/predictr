import React from 'react';
import styles from './voting.module.scss';

const AgreeDisagreeGraph = ({ agreeCount, disagreeCount, isAgreed }) => {
    const total = agreeCount + disagreeCount;
    const agreePercentage = (total ? (agreeCount / total) * 100 : 0).toFixed();
    const disagreePercentage = (total ? (disagreeCount / total) * 100 : 0).toFixed();
    return (
        <div className={styles.root}>
            {agreeCount > 0 && <span className='text-accent-3' title={`${agreeCount} / ${agreePercentage}% ${isAgreed ? '(You)' : ''}`} style={{ flex: agreeCount }} />}
            {disagreeCount > 0 && <span className={styles.disagree} title={`${disagreeCount} / ${disagreePercentage}% ${isAgreed ? '' : '(You)'}`} style={{flex: disagreeCount}} />}
        </div>
    );
};

export default AgreeDisagreeGraph;