import getProfile from "../../../old/utility/getProfile";
import User from "../user";
import dayjs from "dayjs";
import plugin from "dayjs/plugin/relativeTime";
import Buttons from "./buttons";
import { Tooltip } from "@mui/material";
dayjs.extend(plugin)
import styles from './styles.module.scss'

export default function Post(props) {
    const postedOn = dayjs(props.createdOn), isCurrent = props.userId._id === props.user._id, guess_date = dayjs(props.guess_date)
    return (
        <div className="border border-light-0 bg-light-1 rounded-4">
            <div className="p-4 bg-surface shadow-1 rounded-4">
                <div className="flex-between">
                    <User {...getProfile(props.userId)}
                        subtitle={
                            postedOn.isSame(dayjs(), "day") ? postedOn.fromNow() : postedOn.format('MMM DD, YYYY, hh:mm A')
                        }
                    />
                    {!isCurrent && <Buttons {...props} />}
                </div>
                <div className={`d-flex subtitle text-normal fs-normal-sm flex-wrap align-items-center gap-2 ${styles.main}`}>
                    I think <Tooltip title={props.stock_name}><b>{props.stock_symbol}</b></Tooltip> will go {props.allowed ? (
                        <>
                            <b>{props.estimated_direction} {props.estimated_change_percent}%</b> by <Tooltip title={guess_date.format('LL')}><b>{guess_date.format('MMM DD')}</b></Tooltip>
                            {props.description && <p className={`my-1 w-100`}>{props.description}</p>}
                        </>
                    ) : (
                        <>
                            <b className={styles.blur}>del%</b> by <b className={styles.blur}>del Date</b>
                            {props.description && <p className={`my-0 w-100 p-1 ${styles.blur}`}>{props.description}</p>}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}