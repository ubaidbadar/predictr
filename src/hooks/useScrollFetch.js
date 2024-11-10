import axios from "../config/axios";
import { useEffect, useState } from "react"
import getAxiosMessage from "../lib/getAxiosMessage";
import { useLocation } from "react-router-dom";



const useScrollFetch = (api, posts = []) => {
    const [state, setState] = useState({
        posts,
        exists: posts ? posts.length % 20 === 0 : true,
        initial: true
    })
    const search = useLocation().search;
    useEffect(() => {
        if (!state.exists) return;
        const p = state.initial ? [...state.posts] : [];
        let exists = true, other = {};
        const cb = async () => {
            if (exists && (window.innerHeight + window.scrollY + 200) >= document.body.offsetHeight) {
                exists = false;
                setState({ posts: p, exists: true });
                const s = new URLSearchParams(search);
                s.set('page', (p.length / 20) + 1);
                try {
                    const { posts, ...data } = (await axios.get(`${api}?${s.toString()}`)).data
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
        cb()
        return () => {
            setState({ posts: [], exists: true });
            window.removeEventListener('scroll', cb);
        }
    }, [search])
    return state;
}

export default useScrollFetch;