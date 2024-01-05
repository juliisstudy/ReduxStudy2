import { useState } from "react";
import {useDispatch} from "react-redux";
//import {nanoid} from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

const AddPostForm=()=>{
    const[title,setTitle] = useState('');
    const[content,setContent] = useState('');
    const onTitleChanged = e=>setTitle(e.target.value);
    const onContentChanged = e=>setContent(e.target.value);

    const dispatch = useDispatch();

    const onSavePostClicked=()=>{
        if(title&&content){
            dispatch(
                postAdded(title,content)
            )
            setTitle('')
            setContent('')
        }

    }

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
                <input type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    />
                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm;