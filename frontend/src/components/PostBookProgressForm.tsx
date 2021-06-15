import React, { FormEvent, useEffect, useState, useContext } from "react";
import { createBookPost, readCurrentMemberBooks, updateCurrentCompetition, updateCurrentMemberBook } from "../service/BookClubApiService";
import { MemberBook } from "../model/book";
import { AuthContext } from "../context/auth-context"; 
import { ProgressUpdate } from "../model/ProgressUpdate";
import { useHistory } from "react-router-dom";
// import { LogPost } from "../model/LogPost";




function StartBookForm(){

    
    const { user } = useContext(AuthContext);
    const [pagesRead, setPagesRead] = useState(0);
    const [isBookFinished, setIsBookFinished] =useState(false);
    const [ currentBook, setCurrentBook ] = useState<MemberBook>();
    const history = useHistory();


    const memberName = user?.displayName!;
    

    useEffect(() => {
        readCurrentMemberBooks("Lisa").then((data) => {
          setCurrentBook(data[0]);
          
          
        });
      }, []);

      function handleSubmit(event:FormEvent):void {
        event.preventDefault();

        updateCurrentMemberBook(progressUpdate, id);
        updateCurrentCompetition(newMemberLog)
        // createBookPost();
        history.push("/");
        console.log(progressUpdate, id, newMemberLog)

      }

      const newCurrentPage = currentBook?.currentPage! + pagesRead 
        const id = currentBook?._id!
        const progressUpdate:ProgressUpdate = {
            currentPage: newCurrentPage,
            isFinished: isBookFinished
        }
        let newBookFinished;
        if (isBookFinished) {newBookFinished = 1} else {newBookFinished = 0}; 
        const newMemberLog = {
            memberName: "Lisa",
            pagesRead: pagesRead,
            booksFinished: newBookFinished
        }


    return(
        <div className="StartBookForm">
           <form onSubmit={handleSubmit}>
               <p>Log your progress</p>
               {currentBook ?  <>
                <p>You are reading {currentBook.book.title}</p> 
                <p>
                    <label>How many pages did you read?
                        <input type="number" value={pagesRead} onChange={(e) => setPagesRead(Number(e.target.value))}></input>
                    </label>
                </p>
                <p>
                    <label>Did you finish this book?
                        <input type="checkbox" checked={isBookFinished} onChange={(e) => setIsBookFinished(e.target.checked)}></input>
                    </label>
                </p>
                <button type="submit"  >Update</button></>
               : <p>You are not currently reading a book</p>}
           </form>
        </div>
    )
}

export default StartBookForm;
