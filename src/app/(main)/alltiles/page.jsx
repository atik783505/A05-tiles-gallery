'use client'
import tilesData from '@/data';
import TIlescard from '@/ui/TIlescard';
import { Label, SearchField, Spinner } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const Alltiles = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const result = await tilesData();
            setData(result);
            setIsLoading(false);
        };
        loadData();
    }, []);

    const filteredCourses = data.filter((d) =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2 className='text-center font-bold text-[25px]'>All Tiles</h2>
            <div className='w-7/12 md:w-3/12 mx-auto py-3'>
                <SearchField name="search">
                    <Label>Search</Label>
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-96"
                            placeholder="Search..."
                        />
                        <SearchField.ClearButton onClick={() => setSearchQuery('')} />
                    </SearchField.Group>
                </SearchField>
            </div>

            {isLoading ? (
                <div className="flex h-screen w-full items-center justify-center">
                    <Spinner size="lg" label="Loading profile update..." color="primary" />
                </div>
            ) : (
                <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        filteredCourses.map(tile => (
                            <TIlescard key={tile.id} tile={tile}></TIlescard>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Alltiles;