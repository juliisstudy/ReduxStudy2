import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState =[
    {id:1,titile:'good',content:'good'},
    {id:2,titile:'right',content:'good'},
]
const postsSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts=(state)=>state.posts; 

export const{postAdded} = postsSlice.actions;

export default postsSlice.reducer;