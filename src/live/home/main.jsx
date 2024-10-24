import { useState } from "react";
import CreatePost from "../../components/create-post";
import Tabs from "../../ui/tabs";
import Posts from '../../components/posts';
import FollowingsTab from "./followings-tab";
import Filters from "../../icons/filters";

const key = "Leaderboard-Feed", isFeed = localStorage.getItem(key);


export default function Main(props) {
    const [{ posts, feed }, setState] = useState({ posts: [], feed: isFeed });
    return (
        <>
            <div className="flex gap-4">
                <Tabs
                    className="flex-1"
                    value={feed ? "My Feed" : "Explore"}
                    onTabChange={(title) => {
                        const feed = title === 'My Feed';
                        feed ? localStorage.setItem(key, true) : localStorage.removeItem(key);
                        setState({ posts, feed })
                    }}
                    options={["Explore", "My Feed"]}
                />
                <button className="border-1 text-md border-light-0 btn-icon">
                    <Filters />
                </button>
            </div>
            <CreatePost {...props} create={res => setState({ posts: [res.data, ...posts], title })} />
            {feed ?
                props.user.followings > 4 ?
                    <Posts posts={posts} {...props} api='/fetch_global_feeds?isFollow=true' />
                    : <FollowingsTab {...props} />
                : <Posts {...props} posts={posts} />
            }
        </>
    )
}