import { LogPost } from "../model/LogPost";
import "./PostCard.css"

interface Props {
    post: LogPost;
}

function PostCard({post}: Props) {


    return(
        <div className="PostCard">
            {post.typeofPost === "logProgress" && 
                <div className="logProgressPostCard">
                    <img className="profilepic" src= {post.memberPhoto}/>
                    <p className="PostCardParagraph">{post.memberName} has just read {post.pagesRead} pages from <em>{post.book.title}</em>.</p>
                    <p className="PostCardSecondParagraph">They have read {post.currentPage} out of {post.book.number_of_pages} pages.</p>
                    <div className="statusBarGhost"><div className="statusBar" style={{width: post.currentPage/post.book.number_of_pages*100 + "%"}}></div></div>
                </div>}
            
            {post.typeofPost === "startBook" && 
                <div className="StartBookPostCard">
                    <img className="profilepic" src= {post.memberPhoto}/>
                    <p className="PostCardParagraph">{post.memberName} started reading <em>{post.book.title}</em>!</p>
                    <p className="CoverImage"><img src={`http://covers.openlibrary.org/b/isbn/${post.book.isbn_13}-M.jpg`} alt={`cover for ${post.book.title}`} /></p>
                </div>}

            {post.typeofPost === "finishBook" &&
               <div className="FinishBookPostCard">
                <img className="profilepic" src= {post.memberPhoto}/>
                <p className="PostCardParagraph">{post.memberName} finished reading <em>{post.book.title}</em>!</p>
                </div>}
        </div>
    )
}

export default PostCard;