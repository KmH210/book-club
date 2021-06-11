import React, { useEffect, useState } from "react";
import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";

import { readAllPosts } from "../service/BookClubApiService";
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
    console.log(posts);
    return(
        <div className="MainFeed">
             {posts && posts.map(eachPosts =>
            <PostCard key={eachPosts._id} post= {eachPosts}
            />)}
        </div>
    )
}

export default MainFeed;


