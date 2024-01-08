import{useDispatch} from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji ={
    thumbsUp:'1',
    wow:'1',
    heart:'1',
    rocket:'1',
    coffee:'1',
}

const ReactionButtons=({post})=>{
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return (
            <button key = {name}
            type = "button"
            onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}
            >{emoji}{post.reactions[name]}</button>
            )
    })
    

return (
    <div>
        {reactionButtons}
    </div>
)
}
export default ReactionButtons