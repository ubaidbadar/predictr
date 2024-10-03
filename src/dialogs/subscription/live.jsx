import SubscribeFooter from "../../components/subscription/footer";
import SubscribeHeader from "../../components/subscription/header";
import Modal from "../../ui/Modal/modal";

export default function LiveSubscription(props) {
    const link = `https://stockalgos.com/#subscribe=${props._id}`;
    return (
        <Modal title='Your Subscription is Live!'>
            <div className="border-radius-14 overflow-hidden gap-inherit d-flex flex-column bg-surface-2">
                <SubscribeHeader prem_info={user.stats.premium} user={user} />
                <SubscribeFooter prem_info={user.stats.premium} user={user} />
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
        </Modal>
    )
}