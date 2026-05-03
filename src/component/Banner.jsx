import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='py-10 md:py-20 w-11/12 mx-auto rounded-4xl bg-gradient-to-br from-black via-[#1F2937] to-black flex items-center justify-center min-h-[60vh] px-4'>
            <div className='bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-12 rounded-3xl text-center max-w-4xl shadow-2xl animate__animated animate__zoomIn'>

                <h1
                    style={{ animationDuration: '2s' }}
                    className="text-white text-4xl md:text-6xl font-black mb-6 animate__animated animate__fadeInDown"
                >
                    Discover Your <br />
                    <span className="text-blue-500">Perfect Aesthetic</span>
                </h1>
                <div className="animate__animated animate__fadeInUp animate__delay-1s">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-8 py-3 md:py-6 rounded-full transition-all transform hover:scale-105">
                        <Link href='/alltiles'>Browse Now</Link>
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Banner;