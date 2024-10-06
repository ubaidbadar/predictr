import ModalHeader from '../../ui/modal/header';
import Switch from '../../ui/switch';
import styles from './make.module.scss';

export default function MakePrediction(props) {
    return (
        <>
            <ModalHeader title="Make a Prediction" close={props.close} />
            <div className={styles.root}>
                I think
                <button type="button" onClick={() => props.setPage(1)}>{props.stock_name || 'stock'}</button>
                will go
                <button type="button" onClick={() => props.setPage(2)}>movement</button>
                by
                <button type="button" onClick={() => props.setPage(3)}>date</button>
            </div>
            <Switch title="Only for Subscribers?" />
        </>
    )
}