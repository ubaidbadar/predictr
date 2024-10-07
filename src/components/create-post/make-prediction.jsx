import Input from '../../ui/input';
import ModalHeader from '../../ui/modal/header';
import Switch from '../../ui/switch';
import Textarea from '../../ui/textarea';
import styles from './make.module.scss';

export default function MakePrediction({ stock_name, estimated_change_percent, estimated_direction, guess_date, setPage, close }) {
    return (
        <>
            <ModalHeader title="Make a Prediction" close={close} />
            <div className={styles.root}>
                I think
                <button type="button" className={stock_name ? styles.active : ""} onClick={() => setPage(1)}>{stock_name || 'stock'}</button>
                will go
                <button type="button" className={estimated_change_percent ? styles.active : ""} onClick={() => setPage(2)}>{estimated_change_percent ? `${estimated_direction} ${estimated_change_percent}%` : "movement"}</button>
                by
                <button type="button" className={guess_date ? styles.active : ""} onClick={() => setPage(3)}>{guess_date ? guess_date.format("MMMM DD, YYYY") : "date"}</button>
            </div>
            <Input label="Why do you think this?" />
            <Textarea label="Why do you think this?" />
            <Switch title="Only for Subscribers?" />
        </>
    )
}