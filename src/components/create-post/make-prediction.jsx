import Pluse from '../../icons/plus';
import styles from './make.module.scss';

export default function MakePrediction({ setPage }) {
    return (
        <>
            <div className='Modal-Header'>
                <h3>Make a Prediction</h3>
                <button className='btn-close'><Pluse /></button>
            </div>
            <div className={styles.root}>
                I think
                <button type="button" onClick={() => setPage(1)}>stock</button>
                will go
                <button type="button" onClick={() => setPage(2)}>movement</button>
                by
                <button type="button" onClick={() => setPage(3)}>date</button>
            </div>
        </>
    )
}