
import { Cart_item_type } from './shop';

import React from 'react';
import Image from 'next/image';
type item_props = {
    item: Cart_item_type
    add_to_cart: (input: Cart_item_type) => void
}


const Item: React.FC<item_props> = ({ item, add_to_cart }) => {
    return (
        <div className='space-y-4  '>
            <div className="h-64 w-96 relative">
                <Image
                    alt="Picture of the item"
                    layout="fill"
                    objectFit="cover"
                    className="rounded md:m-5"
                    src={item.image} />
            </div>
            <div className='font-bold'>{item.title}</div>
            <div>{item.category}</div>
            <div> {item.description}</div>
            <div className='font-bold'> {item.price}</div>

            <div className='border'>
                <button className='w-full px-4 py-1 bg-gray-100 hover:bg-gray-50' onClick={() => { add_to_cart(item) }} >Add to cart</button>
            </div>
        </div>);
}

export default Item;
