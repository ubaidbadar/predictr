export default function getSearchParams(params = {}) {
    const search = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => value ? search.set(key, value) : search.delete(key));
    return search;
}