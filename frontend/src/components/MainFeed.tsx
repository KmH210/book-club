import { useEffect, useState } from "react";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";
import { readAllPosts } from "../service/BookClubApiService";
import CompetitionSummary from "./CompetitionSummary";
import "./MainFeed.css"

function MainFeed(){
    const [posts, setPosts] = useState<LogPost[]>();

    useEffect(() => {
        loadPosts();
    }, []);
    
    function loadPosts() {
        readAllPosts().then(postsFromApi=> {
            setPosts(postsFromApi);
        });
    }

    return(
        <div className="MainFeed">
            <CompetitionSummary />
             {posts && posts.map(eachPosts =>
            <PostCard key={eachPosts._id} post= {eachPosts}
            />)}
        </div>
    )
}

export default MainFeed;


