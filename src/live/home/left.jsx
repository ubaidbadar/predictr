import FAQs from "../../components/faqs";
import Google from "../../components/google";
import Stats from "../../components/stats";

export default function Left(props) {
    return (
        <div className="grid gap-inherit">
            {props.isLoggedIn ? (
                <>
                    <Stats {...props} />
                    <button className="btn-primary">Predict</button>
                </>
            ) : (
                <div className="card">
                    <h3>Join Predictr</h3>
                    <p className="text-gray-0 mt-1 mb-6">A community for all the day-traders to predict stocks and measure accuracy over the time.</p>
                    <Google />
                    <a href="#login" className="btn-ghosted w-full mt-1">Join with Email</a>
                </div>
            )}
            <FAQs />
        </div>
    )
}