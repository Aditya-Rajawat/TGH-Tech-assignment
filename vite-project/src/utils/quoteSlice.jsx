import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:"quote",
    initialState:{
        initialQuotes:null,
        tag:null
    },
    reducers:{
        addInitialQuote:(state,action)=>{
            state.initialQuotes=action.payload;   
        },
        addTags:(state,action)=>{
            state.tag=action.payload;
        }
    }
});

export const {addInitialQuote,addTags} = quoteSlice.actions;

export default quoteSlice.reducer;
