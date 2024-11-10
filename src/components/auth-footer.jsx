import Google from "./google";

export default function AuthFooter() {
    return (
        <>
            <p className="line-text gap-2">
                or
            </p>
            <p className="text-center text-gray-1">Sign in with</p>
            <Google />
        </>
    )
}