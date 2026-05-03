import tilesData from '@/data';
import TIlescard from '@/ui/TIlescard';
import { Label, SearchField } from '@heroui/react';
import React from 'react';

const Alltiles = async () => {
    const data = await tilesData()
    return (
        <div>
            <h2 className='text-center font-bold text-[25px]'>All Tiles</h2>
            <div className='w-3/12 mx-auto py-3'>
                <SearchField name="search">
                    <Label>Search</Label>
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-96" placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    data.map(tile => <TIlescard key={tile.id} tile={tile}></TIlescard>)
                }

            </div>
        </div>
    );
};

export default Alltiles;