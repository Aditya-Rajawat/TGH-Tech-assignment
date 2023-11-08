import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice=createSlice({
    name:'bookmark',
    initialState:{
        bookmarks:[]
    },
    reducers:{
        addBookMark:(state,action)=>{
            state.bookmarks.push(action.payload);
        }
    }
});


export const {addBookMark}=bookmarkSlice.actions;

export default bookmarkSlice.reducer;