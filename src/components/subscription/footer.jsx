import styles from './footer.module.scss';

export default function SubscribeFooter(props) {
    const Root = props.disabled ? 'span' : 'label'
    return (
        <div className={`p-resp text-center small ${styles.wrapper}`}>
            <p className='my-2 text-accent-4'>Message from {props.name}</p>
            <p className='hightlight'>{props.premium.description}</p>
            <Root htmlFor='confirm-payment-modal' className='btn-primary d-inline-flex btn mt-5 bg-gradient-6 mx-auto'>Subscribe ${props.price}/month</Root>
            <p>Feel free to cancel anytime! You will be billed ${props.premium.price}(USD) automatically every month until you cancel the subscription.</p>
        </div>
    )
}