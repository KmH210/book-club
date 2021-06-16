import { useEffect, useState } from "react";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";
import { createNewCompetition, readAllPosts } from "../service/BookClubApiService";
import CompetitionSummary from "./CompetitionSummary";
import "./MainFeed.css"
import CompetitionForm from "./CompetitionForm";
import { Competition } from "../model/Competition";

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
            {!loadPosts ? (
          <p>Loading...</p>
        ) : (
            <CompetitionSummary />)}
             {!loadPosts ? (
          <p>Loading...</p>
        ) : (posts && posts.map(eachPosts =>
            <PostCard key={eachPosts._id} post= {eachPosts}
            />))}
        </div>
    )
}

export default MainFeed;