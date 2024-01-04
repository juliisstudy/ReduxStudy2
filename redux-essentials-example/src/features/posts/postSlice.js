import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState =[
    {id:1,title:'learning',content:'good'},
    {id:2,title:'studying',content:'good'}
]

const postsSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(title,content,userId){
                return {
                    payload:{
                        id:nanoid(),
                        title,content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts=(state)=>state.posts;

export const {postAdded} =postsSlice.actions;


export default postsSlice.reducer;