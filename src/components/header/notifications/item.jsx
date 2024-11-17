import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const get_month = (createdOn) => dayjs(createdOn).format('MMMM');

const Item = ({
    createdOn,
    algoId,
    postId,
    commentId,
    notifiedBy,
    likeId,
    leaderboardId,
    ...props
}) => {


    let title;
    let to;
    switch (props.type) {
        case 'Algo Added':
            title = <> <b>{algoId.stockAlgoName}</b> has been added to your dashboard.</>;
            to = `/algo_page?algo=${algoId.url_link}&algo_id=${algoId._id}`;
            break;

        case 'Purchase':
            title = <> < b > {
                algoId.stockAlgoName
            } </b> has been successfully purchased.</ >
            to = `/algo_page?algo=${algoId.url_link}&algo_id=${algoId._id}`;
            break;
        case 'Leaderboard Purchase':
            title = <> You have succesfully subscribed to < b >{leaderboardId.title}</b> .</ >
            to = `/user/${leaderboardId.userId}`;
            break;
        case 'New Leaderboard Subscriber':
            title = <>You have a new subscriber to your premium leaderboard.</ >
            break;
        case 'Trial':
            {/* console.log(algoId) */ }
            title = <> Your trial has started for
                for <b> {
                    algoId.stockAlgoName
                } </b></>
            to = `/algo_page?algo=${algoId.url_link}&algo_id=${algoId._id}`;
            break;
        case 'Leaderboard Agreement':
            title = <>Someone has an opinion on your post</>
            to = `/post/${postId._id}`
            break;

        case 'Leaderboard Post Like':
            title = <> <b> {
                notifiedBy?.name
            } </b> liked your prediction on {postId.stock_symbol} </ >
            to = `/post/${postId._id}`
            break;
        case 'Leaderboard Comment Like':
            title = <> <b> {
                notifiedBy?.name
            } </b> liked your comment {commentId.message} </ >
            to = `/post?commentId=${commentId._id}`
            break;
        case 'Leaderboard Comment':
            title = <> <b> {
                notifiedBy?.name
            } </b> commented on your prediction "{commentId.message}"</>
            to = `/post?commentId=${commentId._id}`;
            break;
        case 'Leaderboard Reply':
            title = <> < b > {
                notifiedBy?.name
            } </b> replied to your comment "{commentId.message}"</ >
            to = `/post?commentId=${commentId._id}`
            break;
        case 'Leaderboard Follow':
            title = <> <b> {
                notifiedBy?.name
            }</b> has started following you! </>
            to = `/user/${notifiedBy?._id}`
            break;
        case 'Leaderboard Profile View':
            title = <> <b> {
                notifiedBy?.name
            }
                viewed your profile </b></>
            to = `/user/${notifiedBy?._id}`
            break;
        case 'Leaderboard Prediction Result':
            title = <> Your results from your prediction on {
                postId.stock_symbol
            } are in. </>
            to = `/post/${postId._id}`
            break;
        case 'Leaderboard Following Posted':
            title = <> <b> {
                notifiedBy?.name
            }
            </b> just made a new prediction on <b>{
                postId.stock_symbol
            }</b></ >
            to = `/post/${postId._id}`
            break;
        case 'Leaderboard Podium Result':
            title = <> The Leaderboard Contest for the month of {dayjs(createdOn).subtract(7, 'days').format('MMMM')} has concluded. Come see how you did! </>
            to = `/`
            break;
        case 'Monthly Contest Start':
            title = <> The {get_month(createdOn)} contest has started. Start making your predictions. </>
            to = `/`
            break;
        default:
            title = ""
    }

    return (
        <Link to={to} className='flex-center hover:underline gap-2 leading-4 py-1'>
            <img className='UserAvatar' src={notifiedBy?.profile_img || props.avatar} />
            <span>
                {title}
            </span>
        </Link>
    )
}

export default Item;