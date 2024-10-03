import styles from './header.module.scss';

export default function SubscribeHeader(props) {
return (
        <div className={`bg-accent-7-gradient text-center text-surface-1 p-resp ${styles.main}`}>
            <p className='my-1 position-relative flex-middle'>Subscribe to</p>
            <h4 className='m-0 fw-bolder'>{props.name}</h4>
            <h6 className='my-1'>${props.premium?.price}/month</h6>
            <img src={props.profile_img} className={`bg-surface-3 border-radius-20 ${props.premium ? 'premium' : ''} ${styles.avatar}`} alt='' />
        </div>
    )
}