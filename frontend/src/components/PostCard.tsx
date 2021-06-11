import { LogPost } from "../model/LogPost";

interface Props {
    post: LogPost;
}

function PostCard({ post}: Props) {
    return(
        <div className="PostCard">
            <p className="MemberName">{post.memberName}</p>
            <p className="TypeOfPost">{post.typeofPost}</p>
        </div>
    )
}

export default PostCard;