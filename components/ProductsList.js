import React from 'react'
import data from '../utils/data'
import NextLink from "next/link"

function ProductsList() {
    return (
        <div className="grid grid-cols-2 justify-items-center mx-auto">
        {data.products.map(product =>
            <div key={product.slug} className="py-4">
                <div className="flex bg-white shadow-lg rounded-md overflow-hidden" style={{ width: "550px", height: "300px" }}>
                    <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${product.image})` }}>
                    </div>
                    <div className=" w-1/2 p-4 flex justify-center flex-col">
                        <NextLink href={`/product/${product.slug}`} passHref>
                            <h1 className="text-gray-900 font-bold text-xl">{product.name}</h1>
                        </NextLink>
                        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                        <div className="flex item-center items-center gap-2 mt-2">
                            {product.numReviews}
                            <svg className="w-4 h-4 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">${product.price}</h1>
                            <button className="px-3 py-2 bg-green-400 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default ProductsList
