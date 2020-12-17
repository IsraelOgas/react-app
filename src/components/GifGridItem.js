import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    // console.log( id, title, url )
    return (
        <a className="card animate__animated animate__fadeIn" href={ url } target="_blank" rel="noreferrer">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </a>
    )
}
