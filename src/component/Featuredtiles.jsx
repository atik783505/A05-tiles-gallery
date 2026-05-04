import TIlescard from '@/ui/TIlescard';
import React from 'react';

const Featuredtiles = ({data}) => {
    const tilesData = data.slice(0,4)
    console.log(tilesData)
    return (
        <>
        <h2 className='text-center text-4xl font-bold'>Featured Tiles</h2>
        <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center'>
            {
                tilesData.map(tile => <TIlescard key={tile.id} tile={tile}></TIlescard>)
            }
        </div>
        </>
    );
};

export default Featuredtiles;