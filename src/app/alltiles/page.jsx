import tilesData from '@/data';
import TIlescard from '@/ui/TIlescard';
import React from 'react';

const page = async() => {
    const data =await tilesData()
    return (
        <div className='grid grid-cols-4'>
            {
                data.map(tile => <TIlescard key={tile.id} tile={tile}></TIlescard>)
            }
            
        </div>
    );
};

export default page;