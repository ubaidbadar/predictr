import ModalHeader from '../../ui/modal/header';
import Switch from '../../ui/switch';
import Textarea from '../../ui/textarea';
import ImageSelect from './image-select';
import styles from './make.module.scss';

export default function MakePrediction(props) {
    const { stock_symbol, estimated_change_percent, estimated_direction, guess_date, setPage } = props;
    return (
        <>
            <ModalHeader title="Make a Prediction" close={props.close} />
            <div className={styles.root}>
                I think
                <button type="button" className={stock_symbol ? styles.active : ""} onClick={() => setPage(1)}>{stock_symbol || 'stock'}</button>
                will go
                <button type="button" className={estimated_change_percent ? styles.active : ""} onClick={() => setPage(2)}>{estimated_change_percent ? `${estimated_direction} ${estimated_change_percent}%` : "movement"}</button>
                by
                <button type="button" className={guess_date ? styles.active : ""} onClick={() => setPage(3)}>{guess_date ? guess_date.format("MMMM DD, YYYY") : "date"}</button>
            </div>
            <Textarea value={props.description} name='description' onChange={props.onChange} label="Why do you think this?" />
            <ImageSelect {...props} />
            <Switch title="Only for Subscribers?" />
        </>
    )
}