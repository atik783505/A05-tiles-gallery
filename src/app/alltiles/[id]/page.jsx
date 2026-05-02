import tilesData from '@/data';
import React from 'react';

const page = async({params}) => {
    const {id} = await params
    console.log('id is', id)
    const data = await tilesData()
    const expectedData = data.find(d => d.id == id)
    console.log(expectedData)
    return ( 
        <div>
            <h2>details page</h2>
        </div>
    );
};

export default page;