import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice";
import bookmarkReducer from "./bookmarkSlice";

const appStore=configureStore({
    reducer:{
        'quote':quoteReducer,
        'bookmark':bookmarkReducer
    },

});

export default appStore;