import { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import { createBookPost, setNewMemberBook } from "../service/BookClubApiService";
import { getABook } from "../service/OpenLibraryApiService";
import "./StartBookForm.css"

function StartBookForm(){
    const { user } = useContext(AuthContext);
    const [submittedIsbn, setSubmittedIsbn] = useState("");
    const [currentBook, setCurrentBook] = useState<Book | undefined>();
    const [totalPages, setTotalPages] = useState(0);
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        getABook(submittedIsbn).then((data) => 
        {setCurrentBook(data)})
    }

    function handleBookSubmit(event: FormEvent): void {
        event.preventDefault();
        setIsSubmitting(true);
        setNewMemberBook(newMemberBook);
        createBookPost(newPost).then(()=>{
            history.push("/");
        });
        
    }
    function handleBookAndPagesSubmit(event: FormEvent): void {
        event.preventDefault();
        setIsSubmitting(true);
        if (currentBook && !currentBook.number_of_pages){
            currentBook.number_of_pages = totalPages
        }
        console.log(newMemberBook)
        setNewMemberBook(newMemberBook);
        createBookPost(newPost).then(()=>{
            history.push("/");
        });
        
    }
  
    const newMemberBook = {
        memberName: (user?.displayName ?? ""),
        book: (currentBook ?? {isbn_13: [""], title: "", number_of_pages: 0}),
        currentPage: 0,
        isFinished: false
    }

    const newPost:LogPost = {
        memberName: user?.displayName!,
        memberPhoto: user?.photoURL!,
        typeofPost: "startBook",
        book: (currentBook ?? {isbn_13: [""], title: "", number_of_pages: 0}),
        currentPage: 0
    }
        
    return(
        <div className="StartBookForm">
            {!user ? 
                <p>Please sign in to your Google account to use the site</p>
            : <>
                <form onSubmit={handleSubmit}>
                    <p>What book are you starting?</p>
                    <label>Enter ISBN #{" "}
                    <input type="text" value={submittedIsbn} onChange={(e) => setSubmittedIsbn(e.target.value)}></input>
                    </label>
                    <p>
                    <button type="submit">Find Book</button>
                    </p>
                </form>

                {currentBook && currentBook.number_of_pages &&
                    <div>
                        <p>You have chosen <em>{currentBook.title}</em></p>
                        <button onClick={handleBookSubmit} disabled={isSubmitting}>Start Reading This Book</button>
                    </div>}

                {currentBook && !currentBook.number_of_pages &&
                    <form onSubmit={handleBookAndPagesSubmit}>
                        <p>You have chosen <em>{currentBook.title}</em></p>
                        <p><label >Total pages in this book: <input type="number" value={totalPages} onChange={(e) => setTotalPages(Number(e.target.value))}/></label></p>
                        <button  disabled={isSubmitting}>Start Reading This Book</button>
                    </form>}
                
            </>}

           
        </div>
    )
}

export default StartBookForm;