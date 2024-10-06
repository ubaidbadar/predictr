import Pluse from '../../icons/plus';
import styles from './make.module.scss';

export default function MakePrediction(props) {
    return (
        <>
            <div className='Modal-Header'>
                <h3>Make a Prediction</h3>
                <button className='btn-close'><Pluse /></button>
            </div>
            <div className={styles.root}>
                I think
                <button type="button" onClick={() => props.setPage(1)}>{props.stock_name || 'stock'}</button>
                will go
                <button type="button" onClick={() => props.setPage(2)}>movement</button>
                by
                <button type="button" onClick={() => props.setPage(3)}>date</button>
            </div>
        </>
    )
}