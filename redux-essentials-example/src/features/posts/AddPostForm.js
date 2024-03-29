import { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
//import {nanoid} from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm=()=>{
    const[title,setTitle] = useState('');
    const[content,setContent] = useState('');
    const[userId,setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e=>setTitle(e.target.value);
    const onContentChanged = e=>setContent(e.target.value);
    const onAuthorChange = e=>setUserId(e.target.value);

    const dispatch = useDispatch();

    const onSavePostClicked=()=>{
        if(title&&content){
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('')
            setContent('')
        }

    }
    const canSave = Boolean(title)&&Boolean(content)&&Boolean(userId);

    const usersOption = users.map(user=>(
        <option key={user.id} value = {user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>add a new Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value=""></option>
                    {usersOption}
                </select>



                <input type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    />
                <button type="button" onClick={onSavePostClicked}
                disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm;