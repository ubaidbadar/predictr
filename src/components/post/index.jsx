import getProfile from "../../lib/getProfile";
import User from "../user";
import dayjs from "dayjs";
import plugin from "dayjs/plugin/relativeTime";
import Buttons from "./buttons";
dayjs.extend(plugin)
import styles from './styles.module.scss'
import ToolTip from "../../ui/tooltip";
import Stats from "./stats";
import Agree from "./agree";
import PostComments from "../post-old/PostComments";
import Comment from "../../icons/comment";
import Share from "./share";

export default function Post(props) {
    const postedOn = dayjs(props.createdOn), isCurrent = props.isLoggedIn && props.userId._id === props.user._id, guess_date = dayjs(props.guess_date)
    return (
        <div>
            <div className="border border-light-0 bg-light-1 rounded-4">
                <div className="p-4 grid m-2px gap-4 bg-surface shadow-1 rounded-4">
                    <div className="flex-between">
                        <User {...getProfile(props.userId)}
                            subtitle={
                                postedOn.isSame(dayjs(), "day") ? postedOn.fromNow() : postedOn.format('MMM DD, YYYY, hh:mm A')
                            }
                            isLoggedIn={props.isLoggedIn}
                        />
                        {!isCurrent && <Buttons {...props} />}
                    </div>
                    <div className={`flex-center text-base flex-wrap gap-2 ${styles.main}`}>
                        I think <ToolTip title={props.stock_name}><b>{props.stock_symbol}</b></ToolTip> will go {props.allowed ? (
                            <>
                                <b>{props.estimated_direction} {props.estimated_change_percent}%</b> by <ToolTip title={guess_date.format('LL')}><b>{guess_date.format('MMM DD')}</b></ToolTip>
                                {props.description && <p className={`my-1 w-100`}>{props.description}</p>}
                            </>
                        ) : (
                            <>
                                <b className={styles.blur}>del%</b> by <b className={styles.blur}>del Date</b>
                                {props.description && <p className={`my-0 w-100 p-1 ${styles.blur}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur explicabo laboriosam repellendus molestias accusantium. Doloremque expedita quas magni. Eos delectus recusandae odit corporis, totam suscipit omnis ipsam fugit hic?</p>}
                            </>
                        )}
                    </div>
                    <div className="text-gray-0 gap-x-6 gap-2 flex flex-wrap">
                        {props.allowed && <Agree {...props} />}
                        <label className="btn-text text-inherit mr-auto">
                            <Comment /> Comment
                        </label>
                        <Share _id={props._id} />
                    </div>
                </div>
                <Stats {...props} />
            </div>
            <PostComments {...props} postId={props._id} />
        </div>
    )
}