import axios from "../config/axios";
import { useEffect, useState } from "react"
import getAxiosMessage from "../lib/getAxiosMessage";



const useScrollFetch = (api, posts = []) => {
    const [state, setState] = useState({
        posts,
        exists: posts ? posts.length % 20 === 0 : true
    })
    useEffect(() => {
        if (!state.exists) return;
        const p = [...state.posts];
        let exists = true, other = {};
        const cb = async (e) => {
            if (exists && (window.innerHeight + window.scrollY + 200) >= document.body.offsetHeight) {
                exists = false;
                setState({ posts: p, exists: true });
                const search = new URLSearchParams(location.search);
                search.set('page', (p.length / 20) + 1);
                try {
                    const { posts, ...data } = (await axios.get(`${api}?${search.toString()}`)).data
                    other = { ...other, ...data };
                    p.push(...posts);
                    exists = posts.length === 20;
                    setState({ posts: p, exists, other });
                }
                catch (err) {
                    window.removeEventListener('scroll', cb);
                    setState({ posts: p, exists: false })
                    getAxiosMessage(err);
                }
            }

        }
        window.addEventListener('scroll', cb);
        cb();
        return () => {
            window.removeEventListener('scroll', cb);
        }
    }, [location.search])
    return state;
}

export default useScrollFetch;