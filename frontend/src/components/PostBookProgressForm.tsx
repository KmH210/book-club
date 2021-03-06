import { FormEvent, useEffect, useState, useContext } from "react";
import { createBookPost, readCurrentMemberBooks, updateCurrentCompetition, updateCurrentMemberBook } from "../service/BookClubApiService";
import { MemberBook } from "../model/book";
import { AuthContext } from "../context/auth-context"; 
import { ProgressUpdate } from "../model/ProgressUpdate";
import { useHistory } from "react-router-dom";
import { LogPost } from "../model/LogPost";
import "./PostBookProgressForm.css"

function PostBookProgressForm(){
    const { user } = useContext(AuthContext);
    const [selectedBookId, setSelectedBookId] = useState("")
    const [selectedBook, setSelectedBook] = useState<MemberBook>();
    const [pagesRead, setPagesRead] = useState(0);
    const [isBookFinished, setIsBookFinished] =useState(false);
    const [ currentBooks, setCurrentBooks ] = useState<MemberBook[]>();
    const history = useHistory();
    const memberName = user?.displayName!;
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    useEffect(() => {
        readCurrentMemberBooks(memberName).then((data) => {
          setCurrentBooks(data);
          setSelectedBook(currentBooks?.find(book => book._id === selectedBookId))          
        });
      }, [memberName, selectedBookId, currentBooks]);

      function handleSubmit(event:FormEvent):void {
        event.preventDefault();
        setIsSubmitting(true);
        updateCurrentMemberBook(progressUpdate, id);
        updateCurrentCompetition(newMemberLog)
        createBookPost(newPost).then(()=>{
            history.push("/");
        });
      }

      

        const newCurrentPage = selectedBook?.currentPage! + pagesRead 
        const id = selectedBookId

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
            memberPhoto: user?.photoURL!,
            typeofPost: postType,
            book: selectedBook?.book!,
            pagesRead: pagesRead,
            currentPage: newCurrentPage
        }


    return(
        <div className="PostBookProgress">
            {!user ? 
            <p className="signInWarning">Please sign in to your Google account to use the site</p>
             : 
           <form onSubmit={handleSubmit}>
               <h2>Log your progress</h2>
               {currentBooks && currentBooks.length > 0 ?   
                
                <div>
                    <p>Which book did you read?</p>
                        {currentBooks?.map (eachBook =>
                            <p className="whichBookRadio" key={eachBook._id}><label><input type="radio" name="whichBook"  value={eachBook._id} onChange={(e) => setSelectedBookId(e.target.value)}/> {eachBook.book.title}</label></p>
                            )}
                        
                    
                
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
                    <button type="submit"  disabled={!selectedBook || isSubmitting}>Update</button>
                </div>
                
               : <p>You are not currently reading a book</p>}
           </form>}
        </div>
    )
}

export default PostBookProgressForm;