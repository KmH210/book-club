import { FormEvent, useEffect, useState, useContext } from "react";
import { createBookPost, readCurrentMemberBooks, updateCurrentCompetition, updateCurrentMemberBook } from "../service/BookClubApiService";
import { MemberBook } from "../model/book";
import { AuthContext } from "../context/auth-context"; 
import { ProgressUpdate } from "../model/ProgressUpdate";
import { useHistory } from "react-router-dom";
import { LogPost } from "../model/LogPost";
import "./PostBookProgressForm.css"

function StartBookForm(){
    const { user } = useContext(AuthContext);
    const [pagesRead, setPagesRead] = useState(0);
    const [isBookFinished, setIsBookFinished] =useState(false);
    const [ currentBook, setCurrentBook ] = useState<MemberBook>();
    const history = useHistory();
    const memberName = user?.displayName!;
    
    useEffect(() => {
        readCurrentMemberBooks(memberName).then((data) => {
          setCurrentBook(data[0]);          
        });
      }, [memberName]);

      function handleSubmit(event:FormEvent):void {
        event.preventDefault();
        updateCurrentMemberBook(progressUpdate, id);
        updateCurrentCompetition(newMemberLog)
        createBookPost(newPost);
        history.push("/");
      }

        const newCurrentPage = currentBook?.currentPage! + pagesRead 
        const id = currentBook?._id!

        const progressUpdate:ProgressUpdate = {
                currentPage: newCurrentPage,
                isFinished: isBookFinished
            }

        let newBookFinished;
        let postType;
            if (isBookFinished) {newBookFinished = 1; postType = "finishBook"} else {newBookFinished = 0; postType = "logProgress"}; 
        
        const newMemberLog = {
                memberName: memberName,
                pagesRead: pagesRead,
                booksFinished: newBookFinished
            }

        const newPost:LogPost = {
            memberName: memberName,
            typeofPost: postType,
            book: currentBook?.book!,
            currentPage: newCurrentPage
        }


    return(
        <div className="PostBookProgress">
            {!user ? (
            <p>Please sign in to your Google account to use the site</p>
            ) : (
           <form onSubmit={handleSubmit}>
               <p>Log your progress</p>
               {currentBook ?  <>
                <p>You are reading <em>{currentBook.book.title}</em>.</p> 
                <p>
                    <label>How many pages did you read?{" "}
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
           </form>)}
        </div>
    )
}

export default StartBookForm;