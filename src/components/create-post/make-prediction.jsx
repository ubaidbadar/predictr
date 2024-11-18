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
            <div className='absolute-full bg-light-0 rounded-inherit' />
            <div className='z-1 grid gap-inherit'>
                <ModalHeader title="Make a Prediction" close={props.close} />
                <div className={styles.root}>
                    <Button
                        label="Select Stock"
                        value={stock_symbol}
                        title="🤔 I think"
                        onClick={() => setPage(1)}
                    />
                    <Button
                        label="Set Movement"
                        value={estimated_change_percent ? `${estimated_direction} ${estimated_change_percent}%` : ""}
                        title="📈 will go"
                        onClick={() => setPage(2)}
                    />
                    <Button
                        label="Pick a Date"
                        value={guess_date ? guess_date.format("MMM DD, YYYY") : ""}
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
            </div>
        </>
    )
}