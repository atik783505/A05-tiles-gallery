import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = ({data}) => {
    return (
        <div>
            <div className="w-11/12 mx-auto my-8">
                <div className="bg-slate-50 py-3 rounded-lg shadow-sm border border-gray-100">
                    <Marquee
                        gradient={true}
                        gradientColor="white"
                        gradientWidth={50}
                        speed={60}
                        pauseOnHover={true}
                    >
                        {data.map((tile) => (
                            <div
                                key={tile.id}
                                className="flex items-center gap-4 mx-8"
                            >
                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                    NEW
                                </span>
                                <h1 className="text-gray-800 font-medium text-lg">
                                    Arrivals: <span className="text-blue-600">{tile.title}</span>
                                    <span className="mx-4 text-gray-300">|</span>
                                    Weekly Feature: Modern Geometric Patterns
                                    <span className="mx-4 text-gray-300">|</span>
                                    Join the Community
                                </h1>
                                <div className="w-2 h-2 bg-gray-400 rounded-full ml-4"></div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Marque;