import React, {useState, useEffect} from 'react'
import {GifGridItem} from "./GifGridItem";
import {getGifs} from "../helpers/getGifs";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {


    // const [images, setImages] = useState([]);
    //
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs))
    // }, [category]);

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            {loading ? <h1 className='loading animate__animated animate__pulse'>Cargando...</h1> :
                <h3 className='bg-info bg-opacity-10'> {category} </h3>}
            <div className="row">
                <div className="card_grid">
                    {
                        data.map(gif => (
                            <GifGridItem key={gif.id} {...gif}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}