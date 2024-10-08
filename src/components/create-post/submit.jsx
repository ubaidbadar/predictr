import usePost from "../../hooks/usePost"

const required = ['stock_symbol', 'guess_date', 'estimated_change_percent']




function Main(props) {
    const { loading, err, res, submit } = usePost();
    return (
        <div className="Modal-Footer">
            <button className="btn-primary" onSubmit={() => submit(props.form)}>Submit</button>
        </div>
    )
}

export default function Submit({ form }) {
    return (
        <div className="Modal-Footer">
            {form.stock_symbol && form.guess_date && form.estimated_change_percent ?
                <Main {...props} /> :
                <button className="btn-primary" disabled>Submit</button>}
        </div>
    )
}