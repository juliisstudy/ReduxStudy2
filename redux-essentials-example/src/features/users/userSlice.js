import { createSlice } from "@reduxjs/toolkit";

const initialState =[
{id:'0',name:'juli'},
{id:'1',name:'jame'},
{id:'2',name:'jojo'},

]
const usersSlice = createSlice(
    {
        name:'users',
        initialState,
        reducers:{
            
        }
    }
)
export const selectAllUsers = (state)=>state.users;
export default usersSlice.reducer;