import usePost from "../../hooks/usePost"


function Main(props) {
    const { loading, err, res, submit } = usePost();
    return <button className={`btn-primary${loading ? " loading" : ""}`}
        onClick={() => {
            const data = new FormData(), form = {...props.form}
            form.guess_date = props.form.guess_date.toISOString();
            for (const key in form) props.form[key] !== undefined && data.append(key, props.form[key]);
            submit({
                method: 'POST',
                url: '/leaderboard_post',
                data,
                headers: { 'content-type': 'multipart/form-data' },
                cb: props.create
            })
        }}
    >Submit</button>
}

export default function Submit(props) {
    const form = props.form;
    return (
        <div className="Modal-Footer relative">
            {form.stock_symbol && form.guess_date && form.estimated_change_percent ?
                <Main {...props} /> :
                <button className="btn-primary" disabled>Submit</button>}
        </div>
    )
}