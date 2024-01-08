import PostAuthor from "./PostAuthor.js";
import TimeAgo from "./TimeAgo.js";
import ReactionButtons from "./ReactionButton.js";

const PostsExcerpt =({post})=>{
<article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,100)}</p>
            <p className="">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
}
export default PostsExcerpt