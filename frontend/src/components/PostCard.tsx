// import { useState } from "react";
// import Book from "../model/book";
import { LogPost } from "../model/LogPost";

interface Props {
    post: LogPost;
}

function PostCard({ post}: Props) {
    // const [books, setBooks] = useState<Book[]>();

    return(
        <div className="PostCard">
            {post.typeofPost === "logProgress" ? 
            (<p>{post.memberName} has just read {post.pagesRead} from {post.book.title} today! The book has a total of {post.book.number_of_pages}.</p>)
            :
            (<p>{post.memberName} started reading {post.book.title}!</p>)
            }
        </div>
    )
}

export default PostCard;


