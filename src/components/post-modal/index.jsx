import Modal from '../../ui/modal'
import Pluse from '../../icons/plus';
import PostModal from './PostModal';
import useShow from '../../hooks/useShow';

export default function CreatePost(props) {
    const tools = useShow();
    return (
        <>
            {tools.status && (
                <Modal>
                    <PostModal {...tools} />
                </Modal>
            )}
            <div onClick={props.guard} className={props.disabled ? 'cursor-danger' : ''}>
                <div className='p-3 card gap-2 d-flex align-items-center'>
                    <p className='bg-surface-3 m-0 px-3 py-2 fs-mediam-sm flex-1 text-accent-4 border-radius-20' onClick={tools.open}>Would you like to make a prediction?</p>
                </div>
                <button id='create-post'
                    className='translate-middle-x start-50 bottom-0 btn btn-primary z-index-5 fw-normal pe-3 ps-4 position-fixed mb-4 d-lg-none'
                    onClick={tools.open}>
                    <Pluse className='smaller' />
                    <span className='my-4 d-block small'>Take a guess</span>
                </button>
            </div>
        </>
    )
}