import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {id:1,titile:'good',content:'good'},
    {id:2,titile:'right',content:'good'},
]
const postsSlice = createSlice({
    name:'post',
    initialState,
    reducers:{}
})

export const selectAllPosts=(state)=>state.posts; 

export default postsSlice.reducer;