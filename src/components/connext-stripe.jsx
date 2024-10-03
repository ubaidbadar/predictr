export default function ConnectStripe(props) {
    // Determine the client ID based on the hostname
    const client_id = window.location.hostname === 'stockalgos.com' 
        ? "ca_I4XPIn3f4NbRHdH0jhhWu5JPOLUuUlUf" 
        : "ca_I4XPMkGIF5qnB2ikDHqfsKVU695fSQyJ";
    return (
        <a className='btn btn-primary bg-stripe'
            href={`https://connect.stripe.com/oauth/authorize?client_id=${client_id}&scope=read_write&response_type=code&redirect_uri=${window.location.href}&stripe_user[email]=${props.email}`}
        >
            {/* <i className="fab fa-stripe-s"></i>{props.is_connected ? "Re-c" : "C"}onnect Stripe */}
        </a>
    );
}