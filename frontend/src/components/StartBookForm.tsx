import { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import { createBookPost, setNewMemberBook } from "../service/BookClubApiService";
import { getABook } from "../service/OpenLibraryApiService";


function StartBookForm(){
    const { user } = useContext(AuthContext);
    const [submittedIsbn, setSubmittedIsbn] = useState("");
    const [currentBook, setCurrentBook] = useState<Book | undefined>();
    const history = useHistory();

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        getABook(submittedIsbn).then((data) => 
        {setCurrentBook(data)})
    }

    function handleBookSubmit(event: FormEvent): void {
        event.preventDefault();
        setNewMemberBook(newMemberBook);
        createBookPost(newPost);
        history.push("/");
    }
  
    const newMemberBook = {
        memberName: (user?.displayName ?? ""),
        book: (currentBook ?? {isbn_13: [""], title: "", number_of_pages: 0}),
        currentPage: 0,
        isFinished: false
    }

    const newPost:LogPost = {
        memberName: user?.displayName!,
        typeofPost: "startBook",
        book: (currentBook ?? {isbn_13: [""], title: "", number_of_pages: 0}),
        currentPage: 0
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
               <button onClick={handleBookSubmit} >Start Reading This Book</button></div>}
           </form>
        </div>
    )
}

export default StartBookForm;

