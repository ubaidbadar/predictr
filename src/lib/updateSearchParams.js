export default function updateSearchParams(params = {}) {
    const url = new URL(window.location);
    Object.entries(params).forEach(([key, value]) => {
        if(value) {
            url.searchParams.set(key, value);
        }
        else {
            url.searchParams.delete(key);
        }
    });
    window.history.replaceState(null, '', url);
}