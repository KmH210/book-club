import React, { FormEvent, useContext, useEffect, useState } from "react";
import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";
import { readAllPosts } from "../service/BookClubApiService";
import { isMemberName } from "typescript";
import { AuthContext } from "../context/auth-context";
import { getABook } from "../service/OpenLibraryApiService";


function StartBookForm(){
    const { user } = useContext(AuthContext);
    const [submittedIsbn, setSubmittedIsbn] = useState("");
    const [currentBook, setCurrentBook] = useState<Book | undefined>();

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        getABook(submittedIsbn).then((data) => 
        {setCurrentBook(data)})
    }

    return(
        <div className="StartBookForm">
           <form onSubmit={handleSubmit}>
               <p>What book are you starting?</p>
               <label>Enter ISBN #
               <input type="text" value={submittedIsbn} onChange={(e) => setSubmittedIsbn(e.target.value)}></input>
               </label>
               <button type="submit">Find Book</button>
               {currentBook && <p>You have chosen {currentBook.title}</p>}
           </form>
        </div>
    )
}

export default StartBookForm;

