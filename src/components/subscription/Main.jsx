import React from 'react';
import Model from "../../../ui-v2/Modal/Model";
import AddIcon from '../../../icons-v2/AddIcon';
import SubscribeHeader from './header';
import SubscribeFooter from './footer';
import ConfirmPayment from '../../ConfirmLeaderboardPaymentPopUp/ConfirmPayment';

const SubscribeModal = props => {
    return (
        <>
            <ConfirmPayment
                product={{
                    imageURL: props.user.profile_img,
                    price: props.prem.price,
                    subtitle: `$${props.prem.price}/month`,
                    title: props.user.name
                }}
                title={`Subscribe to ${props.user.name}`}
                auth={props.auth}
                values={{ leaderboard_id: props.prem._id }}
                successTitle={`You have successfully subscribed to ${props.user.name}.`}
                api='/create_leaderboard_premium_subscription'
                onSuccess={props.onSubscribe}
                close={props.close}
            />
            <Model
                title='Subscribe'
                show={true}
                isSimpleModel={true}
                className='text-center bg-surface-3 gap-0'
                closeHandler={props.close}
            >
                <button onClick={props.close} className='btn btn-icon position-absolute z-index-1 active top-0 m-resp text-surface-1 start-0'>
                    <AddIcon className='rotate-45' />
                </button>
                <SubscribeHeader user={props.user} prem_info={props.prem} />
                {props.children}
                <SubscribeFooter user={props.user} prem_info={props.prem} />
            </Model>
        </>
    )
}


export default SubscribeModal;