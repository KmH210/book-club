import { LogPost } from "../model/LogPost";

interface Props {
    post: LogPost;
}

function PostCard({ post}: Props) {


    return(
        <div className="PostCard">
            {post.typeofPost === "logProgress" ? 
            (<div>
                <p>{post.memberName} has just read {post.pagesRead} pages from {post.book.title}. They have read {post.currentPage} out of a total of {post.book.number_of_pages}.</p>
                <div className="statusBar" style={{width: post.currentPage/post.book.number_of_pages*100 + "%"}}></div>
                </div>)
            :
            (<p>{post.memberName} started reading {post.book.title}!</p>)
            }
        </div>
    )
}

export default PostCard;


