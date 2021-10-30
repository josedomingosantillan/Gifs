import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    return (
        <>
            <div className='col-md-3 border-info mb-10 card animate__animated animate__lightSpeedInLeft'>
                <img src={url} alt={title}/>
                <p>{title}</p>
            </div>
            <div className='col-md-1'></div>
        </>
    )
}