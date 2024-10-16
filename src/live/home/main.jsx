import { useState } from "react";
import CreatePost from "../../components/create-post";
import Tabs from "../../ui/tabs";
import UnAuth from "../../components/posts/un-auth";
import Posts from '../../components/posts';
import FollowingsTab from "./followings-tab";

const key = "Leaderboard-Feed", isFeed = localStorage.getItem(key) || true;


function Master(props) {
    const [{ posts, feed }, setState] = useState({ posts: [], feed: isFeed });
    return (
        <>
            <Tabs 
                value={feed ? "My Feed" : "Explore"}
                onTabChange={(title) => {
                const feed = title === 'My Feed';
                feed ? localStorage.setItem(key, true) : localStorage.removeItem(key);
                setState({ posts, feed })
            }}
                options={["Explore", "My Feed"]}
            />
            <CreatePost {...props} create={res => setState({ posts: [res.data, ...posts], title })} />
            {feed ?
                props.user.followings > 4 ? <Posts {...props} api='/fetch_global_feeds?isFollow=true' /> : <FollowingsTab {...props} />
                : <Posts {...props} posts={posts} />
            }
        </>
    )
}

export default function Main(props) {
    return (
        <div className="grid gap-inherit py-4">
            {props.isLoggedIn ? <Master {...props} /> : <UnAuth />}
        </div>
    )
}