import { Button } from '@heroui/react';
import React from 'react';

const Banner = () => {
    return (
        <div className='py-40 w-full bg-gradient-to-br from-black via-[#1F2937] to-black text-center'>
            <h1 className="text-white text-6xl font-black mb-5">
                Discover Your <span className="text-blue-500">Perfect Aesthetic</span>
            </h1>
            <Button>Browse Now</Button>
        </div>
    );
};

export default Banner;