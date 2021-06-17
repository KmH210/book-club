import { LogPost } from "../model/LogPost";
import "./PostCard.css"

interface Props {
    post: LogPost;
}

function PostCard({ post}: Props) {


    return(
        <div className="PostCard">
            {post.typeofPost === "logProgress" && 
                <div className="logProgressPostCard">
                    <p>{post.memberName} has just read {post.pagesRead} pages from <em>{post.book.title}</em>.</p>
                    <p>They have read {post.currentPage} out of {post.book.number_of_pages} pages.</p>
                    <div className="statusBar" style={{width: post.currentPage/post.book.number_of_pages*100 + "%"}}></div>
                </div>}
            
            {post.typeofPost === "startBook" && 
                <p>{post.memberName} started reading <em>{post.book.title}</em>!<br/><img src={`http://covers.openlibrary.org/b/isbn/${post.book.isbn_13}-M.jpg`} alt={`cover for ${post.book.title}`} /></p>}

            {post.typeofPost === "finishBook" && 
                <p>{post.memberName} finished reading <em>{post.book.title}</em>!</p>}
            
        </div>
    )
}

export default PostCard;