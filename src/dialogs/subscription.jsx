import React, { useState } from 'react';
import Input from "../ui/input";
import Model from "../ui/Modal/Model";
// import CheckCircle from '../../../icons-v2/CheckCircle';
import SubscribeHeader from '../components/subscription/header';
import SubscribeFooter from '../components/subscription/footer';
import X from '../../../icons-v2/X';
import Form from '../hoc/Form';
import ConnectStripe from '../../ConnectStripe';
import axios from 'axios';
import copyHandler from '../../../utility/copyHandler';

export default function SetUpSubscription({ user, refreshStats, ...props }) {
    const [{ show, prem = {} }, setState] = useState({ ...props });


    if (show) {
        const link = `https://stockalgos.com/#subscribe=${user._id}`;
        return (
            <Model closeHandler={() => setState({ prem, show: false })} title='Your Subscription is Live!' show={true}>
                <div className="border-radius-14 overflow-hidden gap-inherit d-flex flex-column bg-surface-2">
                    <SubscribeHeader prem_info={prem} user={user} />
                    <SubscribeFooter prem_info={prem} user={user} />
                </div>
                <div className='text-center'>
                    <p className='m-0'>Promote yourself and get Subscribers.</p>
                    <div className='flex-middle mt-3 gap-3 text-primary-darken-4'>
                        <button onClick={() => copyHandler(link, 'Link has been copied!')} className="fas fa-link h4 btn btn-icon border" />
                        <a href={`https://www.twitter.com/share?url=${link}`} className='btn btn-icon border h4' target='_blank'>
                            {/* <X className='h6' /> */}
                            Twitter
                        </a>
                        <a href={`https://www.facebook.com/sharer.php?u=${link}`} className='btn btn-icon border h4 fab fa-facebook' target='_blank' />
                    </div>
                </div>
            </Model>
        );
    }

    return (
        <Model
            onSubmit={async (e) => {
                try {
                    const endpoint = prem._id ? '/update_leaderboard_premium_offered' : '/create_leaderboard_premium_offered';
                    const res = await axios.post(endpoint, e.values);
                    setState({ prem: res.data.leaderboard || { ...prem, ...e.values }, show: true });
                    e.hidePopUp();
                    refreshStats();
                } catch (err) {
                    e.onFailure(err.message);
                }

            }}
            Root={Form}
            title={`${prem ? "Update" : "Setup"} Subscription`}
            component={({ showPopUp }) => <button id='Setup Subscription Open' className='d-none' onClick={showPopUp} />}
            footer={(loading) => (
                <div className='model-footer'>
                    <button className={`btn btn-primary ${loading ? "progress-btn" : ""}`} disabled={loading || !user.stripe_developer_acct}>Save</button>
                </div>
            )}
        >
            <div>
                <p className="mt-0 mb-2">Enter membership amount</p>
                <Input defaultValue={prem.price || 5} required={true} min={5} errorText="Minimum Price should be $5!" name='price' placeholder='Enter Amount' type='number' startAdornment="$" />
            </div>
            <div>
                <p className="mt-0 mb-2">Note to Subscribers</p>
                <Input defaultValue={prem.description || ''} name='description' errorText="Description must be minimum 10 characters long!" minLength={10} required placeholder='Write your message...' />
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
        </Model>
    );
}
