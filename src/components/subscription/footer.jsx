import styles from './footer.module.scss';

export default function SubscribeFooter(props) {
    const Root = props.disabled ? 'span' : 'label'
    return (
        <div className={`p-resp text-center small ${styles.wrapper}`}>
            <p className='my-2 text-accent-4'>Message from {props.user.name}</p>
            <p className='hightlight'>{props.prem_info.description}</p>
            <Root htmlFor='confirm-payment-modal' className='btn-primary d-inline-flex btn mt-5 bg-gradient-6 mx-auto'>Subscribe ${props.prem_info.price}/month</Root>
            <p>Feel free to cancel anytime! You will be billed ${props.prem_info.price}(USD) automatically every month until you cancel the subscription.</p>
        </div>
    )
}