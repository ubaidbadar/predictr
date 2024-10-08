import usePost from "../../hooks/usePost"


function Main(props) {
    const { loading, err, res, submit } = usePost();
    return <button className={`btn-primary${loading ? " loading" : ""}`}
        onClick={() => {
            const data = new FormData();
            for (let key in props.form) data.append(key, props.form[key]);
            submit({
                method: 'POST',
                url: '/leaderboard_post',
                data,
                headers: { 'content-type': 'multipart/form-data' },
            })
        }}
    >Submit</button>
}

export default function Submit(props) {
    const form = props.form;
    return (
        <div className="Modal-Footer">
            {form.stock_symbol && form.guess_date && form.estimated_change_percent ?
                <Main {...props} /> :
                <button className="btn-primary" disabled>Submit</button>}
        </div>
    )
}