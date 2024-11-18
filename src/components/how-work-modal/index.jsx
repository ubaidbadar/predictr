import Down from '../../icons/down';
import styles from './styles.module.scss';


const Item = props => (
    <div className={styles.item}>
        <small>{props.title}</small>
        <div aria-label={props.label} aria-details={props.details}>
            <Down />
        </div>
    </div>
)

export default function HowWorkModal() {
    return (
        <>
            <Item
                title="1. Pick a stock"
                label="Select Stock"
                details="🤔 I think"
            />
            <Item
                title="2. Select how much you think it will move and the direction."
                label="Set Movement"
                details="📈 Will go"
            />
            <Item
                title="3. Select end date"
                label="Pick a Date"
                details="🗓 By"
            />
            <p className='flex text-sm'>
                4. See results <label className='btn-text underline font-bold ml-1 hover:no-underline'>View scoring system</label>
            </p>
            <label htmlFor='Create-Post-Modal' className='btn-primary ml-auto mt-auto'>Make Prediction</label>
        </>
    )
}