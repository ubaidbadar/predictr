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
        <div className="grid gap-inherit py-4">
            <Tabs onTabChange={(title) => {
                const feed = title === 'My Feed';
                feed ? localStorage.setItem(key) : localStorage.removeItem(key, true);
                setState({ posts, explore })
            }}
                options={["Explore", "My Feed"]}
            />
            <CreatePost {...props} create={res => setState({ posts: [res.data, ...posts], title })} />
            {feed ?
                props.user.followings > 4 ? <Posts {...props} api='/fetch_global_feeds?isFollow=true' /> : <FollowingsTab {...props} />
                : <Posts {...props} posts={posts} />
            }
        </div>
    )
}

export default function Main(props) {
    return props.isLoggedIn ? <Master {...props} /> : <UnAuth />
}