import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExportApp = () => {
    const [categories, setCategories] = useState([
        "One Punch"
    ]);

    //  const hanleAdd = () => {
    //  setCategories([...categories, "Spider Man"]);
    // };

    return (
        <>
            <h1 className='head animate__animated animate__bounceIn'>Api para buscar gifs.</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    //categories.map(category => <li key={category}> {category}</li>)
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}