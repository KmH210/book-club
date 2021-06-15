import React, { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import Book from "../model/book";
import { createBookPost, setNewMemberBook } from "../service/BookClubApiService";
// import { LogPost } from "../model/LogPost";
// import PostCard from "./PostCard";
// import { readAllPosts } from "../service/BookClubApiService";
// import { isMemberName } from "typescript";
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

    function handleBookSubmit(event: FormEvent): void {
        event.preventDefault();
        setNewMemberBook(newMemberBook);
        createBookPost(newMemberBook);
    }
  
    const newMemberBook = {
        memberName: (user?.displayName ?? ""),
        book: (currentBook ?? {isbn_10: [""], title: "", number_of_pages: 0}),
        currentPage: 0,
        isFinished: false
    }
        
    return(
        <div className="StartBookForm">
           <form onSubmit={handleSubmit}>
               <p>What book are you starting?</p>
               <label>Enter ISBN #
               <input type="text" value={submittedIsbn} onChange={(e) => setSubmittedIsbn(e.target.value)}></input>
               </label>
               <button type="submit">Find Book</button>
               {currentBook && <div><p>You have chosen {currentBook.title}</p>
               <button onClick={handleBookSubmit}>Start Reading This Book</button></div>}
           </form>
        </div>
    )
}

export default StartBookForm;

