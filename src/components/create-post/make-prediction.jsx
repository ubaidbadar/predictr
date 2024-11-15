import ModalHeader from '../../ui/modal/header';
import Switch from '../../ui/switch';
import Textarea from '../../ui/textarea-normal';
import ImageSelect from './image-select';
import styles from './make.module.scss';
import Button from './components/button';


export default function MakePrediction(props) {
    const { stock_symbol, estimated_change_percent, estimated_direction, guess_date, setPage } = props;
    return (
        <>
            <ModalHeader title="Make a Prediction" close={props.close} />
            <div className={styles.root}>
                <Button
                    value={stock_symbol || "Select Stock"}
                    title="🤔 I think"
                    onClick={() => setPage(1)}
                />
                <Button
                    value={estimated_change_percent ? `${estimated_direction} ${estimated_change_percent}%` : ""}
                    title="📈 will go"
                    onClick={() => setPage(2)}
                />
               <Button
                    value={guess_date ? guess_date.format("MMMM DD, YYYY") : ""}
                    title="🗓 by"
                    onClick={() => setPage(3)}
                />
            </div>
            <Textarea className={styles.reason} placeholder="Reason..." rows={1} value={props.description} name='description' onChange={props.onChange} label="Why do you think this?" />
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