import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addInitialQuote } from "./quoteSlice";

const useNextQuote=()=>{

        const dispatch=useDispatch();

        const getNextQuote=async()=>{
            const data=await fetch("https://api.quotable.io/random/");
            const json=await data.json();
            dispatch(addInitialQuote(json))
        }

        useEffect(()=>{
            getNextQuote();
        },[])
    };

    export default useNextQuote;