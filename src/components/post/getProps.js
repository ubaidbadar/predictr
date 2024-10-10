export default function getProps({user, isLoggedIn, guard}) {
    return {
        user,
        isLoggedIn,
        guard
    }
}