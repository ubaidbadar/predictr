import Input from "../../ui/input";
import Modal from "../../ui/modal/modal";
import ModalV2 from '../../ui/modal';
// import CheckCircle from '../../../icons-v2/CheckCircle';
import SubscribeHeader from '../../components/subscription/header';
import SubscribeFooter from '../../components/subscription/footer';
import Form from '../../hoc/Form';
import axios from 'axios';
import ConnectStripe from '../../components/connext-stripe';
import copy from '../../utility/copy';
import useShow from '../../hooks/useShow';

export default function SetUpSubscription({ user, ...props }) {
    const premium = user.premium || {}, tools = useShow();

    if (tools.className) {
        const link = `https://stockalgos.com/#subscribe=${user._id}`;
        return (
            <ModalV2 title='Your Subscription is Live!' {...tools}>
                <div className="border-radius-14 overflow-hidden gap-inherit d-flex flex-column bg-surface-2">
                    <SubscribeHeader {...user} />
                    <SubscribeFooter {...user} />
                </div>
                <div className='text-center'>
                    <p className='m-0'>Promote yourself and get Subscribers.</p>
                    <div className='flex-middle mt-3 gap-3 text-primary-darken-4'>
                        <button onClick={() => copy(link, 'Link has been copied!')} className="fas fa-link h4 btn btn-icon border" />
                        <a href={`https://www.twitter.com/share?url=${link}`} className='btn btn-icon border h4' target='_blank'>
                            {/* <X className='h6' /> */}
                            Twitter
                        </a>
                        <a href={`https://www.facebook.com/sharer.php?u=${link}`} className='btn btn-icon border h4 fab fa-facebook' target='_blank' />
                    </div>
                </div>
            </ModalV2>
        );
    }

    
    return (
        <Modal
            onSubmit={async (e) => {
                try {
                    const endpoint = premium._id ? '/update_leaderboard_premium_offered' : '/create_leaderboard_premium_offered';
                    const res = await axios.post(endpoint, e.values);
                    props.setAuth({ premium: res.data.leaderboard || { ...premium, ...e.values } });
                    e.other.close();
                    tools.open();
                    // refreshStats();
                } catch (err) {
                    e.onFailure(err.message);
                }

            }}
            Root={Form}
            title={`${premium ? "Update" : "Setup"} Subscription`}
            component={tools => <button id='Setup Subscription Open' onClick={tools.open} >Rehan</button>}
            footer={(props) => (
                <div className='Modal-footer'>
                    <button className={`btn btn-primary ${props.className}`} disabled={props.disabled || !user.stripe_developer_acct}>Save</button>
                </div>
            )}
        >
            <div>
                <p className="mt-0 mb-2">Enter membership amount</p>
                <Input defaultValue={premium.price || 5} required={true} min={5} errorText="Minimum Price should be $5!" name='price' placeholder='Enter Amount' type='number' 
                    // startAdornment="$"
                 />
            </div>
            <div>
                <p className="mt-0 mb-2">Note to Subscribers</p>
                <Input defaultValue={premium.description || ''} name='description' errorText="Description must be minimum 10 characters long!" minLength={10} required placeholder='Write your message...' />
            </div>
            <div>
                <p className='mt-0 mb-2'>Connect with stripe to accept payments.</p>
                {user.stripe_developer_acct ? (
                    <div className='d-flex align-items-center fw-semibold bg-surface-3 px-4 border-radius-40 py-3 gap-2 small'>
                        {/* <CheckCircle className='svg-normal text-accent-3' /> */}
                        Stripe account is connected
                        <ConnectStripe email={user.email} is_connected={user.stripe_developer_acct} />
                    </div>
                ) : <ConnectStripe email={user.email} is_connected={user.stripe_developer_acct} />}
            </div>
        </Modal>
    );
}
