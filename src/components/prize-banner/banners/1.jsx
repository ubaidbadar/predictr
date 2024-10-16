import Winners from "./winners";

const btns = (
    <>
        <button className='btn-primary bg-surface'>Monthly Winners</button>
        <button
            className='btn-primary bg-opacity-0 lg:bg-opacity-10 text-surface bg-surface'
        >Contest details</button>
    </>
)

export default function First() {
    return (
        <div className={`text-center items-center md:text-left p-resp p-sm md:gap-y-0 gap-resp flex-col md:flex-row justify-between bg-primary-0 rounded-4`}>
            <div>
                <p className='text-secondary-0 leading-4 mt-4 md:mt-0 mb-2 font-bold'>Predict to win Monthly prizes</p>
                <h1 className='font-extrabold text-3xl md:max-w-[14em] mb-resp'>$500, $300 and $200 for top three predictors.</h1>
                <div className="lg:flex-row md:flex flex-col hidden gap-3 [&>button]:w-[12.25rem]">{btns}</div>
            </div>
            <Winners />
        </div>
    )
}