import Check from '../../../icons/check-circle';
import Avatar from '../../avatar';
import Plane from '../../../icons/plane';
import usePost from '../../../hooks/usePost';

const AddComment = ({ className = '', onAdd, isReply, api = '/feed_comment', focus, _id, postId, guard, isLoggedIn, user }) => {
    const { submit, loading, done } = usePost();
    const onSubmit = e => {
        e.preventDefault();
        const message = e.target.message.value.trim();
        if (message !== '') {
            const data = { message, postId };
            if (_id !== postId) data.commentId = _id;
            submit({
                method: 'PUT',
                url: api, data, cb: (res) => {
                    onAdd && onAdd({
                        ...res.data,
                        createdOn: new Date(),
                    });
                    e.target.reset();
                }
            })
        }
    }
    return (
        <form onSubmit={onSubmit} className={`bg-light-1 flex-center relative pl-3 rounded-3 ${className}`}>
            <Avatar className="text-2xl" {...user} />
            <input
                type="text"
                autoFocus={focus}
                disabled={!isLoggedIn || loading}
                className='outline-none h-full py-4 flex-1 bg-none pl-3'
                name='message'
                placeholder={`Add ${isReply ? 'reply' : 'comment'}`}
                id={_id}
            />
            {loading && <div className='loading text-lg mr-2' />}
            {done && <Check className='text-green-0 mr-2 w-5 h-5' />}
            {!loading && !done && (
                <button className='btn-icon text-primary-0 text-lg'>
                    <Plane />
                </button>
            )}
        </form>
    )
}


export default AddComment;