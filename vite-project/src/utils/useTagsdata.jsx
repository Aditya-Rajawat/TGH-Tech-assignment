import React, { useEffect, useState } from 'react'

const useTagsdata = () => {

    const [tagData,setTagData]=useState();
    
    const getTagdata = async () => {
        const data = await fetch("https://api.quotable.io/tags")
        const json = await data.json();
        setTagData(json);
    }

    useEffect(() => {
        getTagdata();
    }, [])

    return tagData;

}

export default useTagsdata;