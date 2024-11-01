import useGet from "../../hooks/useGet";
import ArrowBack from "../../icons/arrow-back";
import Modal from "../../ui/modal/modal";
import { Fragment } from "react";
import User from "../user";
import Follow from "../follow";
import Select from "../../ui/select";
import DropDown from "./dropdown";
import Pagination from "../../ui/pagination";


const Main = (props) => {
    const { data = props.data, err, Loader, onParamsChange, params } = useGet('/fetch_leaderboard_standings', props.params, false)
    return (
        <>
            <DropDown value={params.show} onParamsChange={onParamsChange} />
            <div className="User-Table User-Table-4">
                <b>Pos.</b>
                <b>Predictors</b>
                <b>Accuracy</b>
                <b></b>
                {data?.results.map(item => (
                    <Fragment key={item._id}>
                        <p>{item.position}</p>
                        <User {...item.userId} />
                        <p>{item.guess_accuracy.toFixed()}%</p>
                        <Follow {...props} userId={item.userId._id} />
                    </Fragment>
                ))}
            </div>
            <Pagination length={data.total} />
        </>
    )
}

export default function TopModal(props) {
    const btnProps = {
        className: "btn-text font-bold text-xs",
        children: <>View All <ArrowBack className="rotate-180" /></>
    }
    if (props.isLoggedIn) return (
        <Modal
            title="Leaderboard"
            component={tools => <button onClick={tools.open} {...btnProps} />}
        >
            <Main {...props} />
        </Modal>
    )
    return <a {...btnProps} href="#login" />
}