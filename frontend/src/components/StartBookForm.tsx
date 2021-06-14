import React, { useEffect, useState } from "react";
import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";

import { readAllPosts } from "../service/BookClubApiService";


function StartBookForm(){
    return(
        <div className="StartBookForm">
           <form>
               <p>What book are you starting?</p>
               <label>Enter ISBN #
               <input type="text"></input>
               </label>
               <button type="submit">Start your book</button>
           </form>
        </div>
    )
}

export default StartBookForm;

