import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from "../../components/GifGridItem"

describe( 'Pruebas en en componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://url_random/img.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )

    test( 'debe de mostrar el componente correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    } )

    test( 'debe de tener un parrafo con el title', () => {
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );
    } )

    test( 'debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find( 'img' );
        // console.log( img.prop('src') );
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );
    } )

    test( 'debe de tener animate__fadeIn', () => {
        const a = wrapper.find( 'a' );
        const className = a.prop( 'className' );

        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
    } )

} )
