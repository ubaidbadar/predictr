import Modal from "../ui/modal/modal";

const faqs = [
    {
        title: "What is StockAlgos Predictr?",
        children: (
            <>
                <p>The <b>StockAlgos Leaderboard</b> is a platform that ranks and analyzes the most profitable and consistent stock pickers. It’s designed for anyone interested in the stock market, whether you’re a beginner or a seasoned pro.</p>
                <p>On the leaderboard, users make predictions about stock movements and their accuracy is tracked over time. For example, a user might predict that a particular stock will go up by a certain percentage by a specific date. These predictions are then monitored and the results are updated on the leaderboard.</p>
                <p>The goal of the StockAlgos Leaderboard is to provide a space where users can find inspiration, learn new skills, and challenge themselves. It’s a great way to see how your stock market predictions stack up against others and learn from the strategies of successful stock pickers. So, if you think you’re good at predicting the stock market, or want to get better at it, the StockAlgos Leaderboard could be a useful tool for you.</p>
            </>
        )
    },
    {
        title: "What is monthly contest?",
        children: (
            <>
                <p>StockAlgos hosts a monthly stock prediction competition. In this contest, users compete against each other by making predictions about stock movements. The accuracy of these predictions is tracked over time.</p>
                <p>For example, a user might predict that a particular stock will go up by a certain percentage by a specific date. These predictions are then monitored and the results are updated on the leaderboard.</p>
                <p>The winners of the competition are announced at the end of each month. This contest provides a great opportunity for users to test their stock market prediction skills and learn from others. It’s a fun and engaging way to challenge yourself and see how your predictions stack up against others.</p>
            </>
        )
    },
    {
        title: "How it Works?",
        children: (
            <>
                <b>Make Predictions</b>
            </>
        )
    }
]

export default function FAQs() {
    return (
        <div className="text-gray-0 grid justify-start gap-2">
            <b className="text-sm">FAQs</b>
            {faqs.map((faq, index) => <Modal key={index} {...faq} component={tools => <button className="btn-text justify-start" onClick={tools.open}>{faq.title}</button>} />)}
        </div>
    )
}