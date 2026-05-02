import tilesData from '@/data';
import Image from 'next/image';
import React from 'react';

const Tile = async ({ params }) => {
    const { id } = await params
    console.log('id is', id)
    const data = await tilesData()
    const expectedData = data.find(d => d.id == id)
    console.log(expectedData)
    return (
        <div className='py-16'>

            <div className='flex flex-col items-center md:flex-row justify-around w-11/12 mx-auto gap-6'>
                <div >
                    <Image alt='image' src={expectedData.image} width={500} height={500}></Image>
                </div>

                <div className="space-y-3">
                    <div>
                        <p className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-2">
                            {expectedData.category}
                        </p>
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            {expectedData.title}
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Designed by {expectedData.creator}
                        </p>
                    </div>

                    <div className="text-2xl font-semibold text-gray-800">
                        {expectedData.currency}: {expectedData.price}$
                        {expectedData.inStock ? (
                            <span className="ml-3 text-sm font-normal bg-green-500 text-white px-2 py-1 rounded">In Stock</span>
                        ) : (
                            <span className="ml-3 text-sm font-normal bg-red-500 text-white px-2 py-1 rounded">Out of Stock</span>
                        )}
                    </div>

                    <div className="border-t border-b border-gray-100 py-6">
                        <h3 className="text-lg font-medium mb-3">Specifications</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div> 
                                <span className="font-bold">Material:</span> {expectedData.material}
                            </div>
                            <div>
                                <span className="font-bold">Size:</span> {expectedData.dimensions}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">About this Style</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {expectedData.style_description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                        {expectedData.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tile;