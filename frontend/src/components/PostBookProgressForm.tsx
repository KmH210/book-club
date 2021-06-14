// import React, { useEffect, useState } from "react";
// import Book from "../model/book";
// import { LogPost } from "../model/LogPost";
// import PostCard from "./PostCard";
// import { readAllPosts } from "../service/BookClubApiService";


function StartBookForm(){
    return(
        <div className="StartBookForm">
           <form>
               <p>Log your progress</p>
               <label>How many pages did you read?
               <input type="number"></input>
               </label>
               <label>Did you finish this book?
               <input type="checkbox"></input>
               </label>
               <button type="submit">Update</button>
           </form>
        </div>
    )
}

export default StartBookForm;
