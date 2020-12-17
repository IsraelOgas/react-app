import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {

    // const [ images, setImages ] = useState( [] );

    const { data: images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ] );

    // getGifs();

    return (
        <>
            <h1 className="animate__animated animate__fadeIn">{ category }</h1>

            { loading && <p className="animate__animated animate__flash">Cargando</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ) )
                }
            </div>
        </>
    )
}
