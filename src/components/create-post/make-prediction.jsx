import CheckCircle from '../../icons/check-circle';
import Down from '../../icons/down';
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
                <button aria-label='🤔 I think' aria-details={stock_symbol || "Select Stock"} type="button" onClick={() => setPage(1)}>
                    {stock_symbol ? <CheckCircle /> : <Down />}
                </button>
                <button
                    aria-label='📈 will go'
                    type="button"
                    onClick={() => setPage(2)}
                    aria-details={estimated_change_percent ? `${estimated_direction} ${estimated_change_percent}%` : "Set Movement"}
                >
                    {estimated_change_percent ? <CheckCircle /> : <Down />}


                </button>
                <button
                    aria-label='🗓 by'
                    type="button"
                    className={guess_date ? styles.active : ""}
                    onClick={() => setPage(3)}
                    aria-details={guess_date ? guess_date.format("MMMM DD, YYYY") : "Pick a Date"}
                >{guess_date ? <CheckCircle /> : <Down />}</button>
            </div>
            <Textarea value={props.description} name='description' onChange={props.onChange} label="Why do you think this?" />
            <ImageSelect {...props} />
            {props.onlyForSubscribers !== undefined && (
                <Switch title="Only for Subscribers?"
                    checked={props.onlyForSubscribers}
                    onChange={e => props.setForm({ onlyForSubscribers: e.target.checked })}
                />
            )}
        </>
    )
}