import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='py-35 w-full bg-gradient-to-br from-black via-[#1F2937] to-black text-center'>
            <h1 className="text-white text-6xl font-black mb-5">
                Discover Your <br /><span className="text-blue-500">Perfect Aesthetic</span>
            </h1>
            
            <Button><Link href='/alltiles'>Browse Now</Link></Button>
        </div>
    );
};

export default Banner;