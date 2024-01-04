import createSlice from "@reduxjs/toolkit";

const initialState =[
    {id:0,name:'jul'},{id:1,name:'neil'}
]
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducer:{}
})

export const selectAllUsers = (state)=>state.users;
export default usersSlice.reducer;