import ArrowCurve from "../../../icons/arrow-curve";
import copy from "../../../lib/copy";
import shareFB from "../../../lib/share-fb";
import DropDown from "../../../ui/drop-down";

export default function Share(props) {
    const url = `${location.origin}/post/${props._id}`;
    return (
        <DropDown className="text-sm"
            component={props => (
                <button {...props} className="btn-icon no-space">
                    <ArrowCurve className="text-base" />
                </button>
            )}
        >
            <button onClick={() => copy(url, "Link has been copied")}>Copy</button>
            <button onClick={() => shareFB(url)}>Facebook</button>
            <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank">Share on X</a>
        </DropDown>
    )
}