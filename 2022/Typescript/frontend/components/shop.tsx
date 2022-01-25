import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Cartbutton from './cartbutton';
import Item from './item';

export type Cart_item_type = {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    title: string
}

const getproducts = async (): Promise<Cart_item_type[]> => {
    const res_data = await fetch('https://fakestoreapi.com/products')
    const json_data = await res_data.json()

    return json_data
}

function Shop() {
    const [state, setstate] = useState<string[]>()
    const [cart_open, set_cart_open] = useState(false)
    const [cart_items, set_cart_items] = useState([] as Cart_item_type[])
    const get_total_items = () => { }
    const add_to_cart = (input: Cart_item_type) => { console.log('added to cart') }
    const remove_to_cart = () => { }
    const { data, isLoading, error } = useQuery<Cart_item_type[]>('products', getproducts)
    { data && console.log(data) }
    if (isLoading) return <div>its Loading</div>
    if (error) return <div>Something went wrong.....</div>
    return (
        <div className='m-14 md:grid grid-cols-3 gap-14'>

            {data && data.map((item) => {
                return (
                    <div className=' border p-2 rounded-sm overflow-hidden' key={item.id}>
                        <Item add_to_cart={add_to_cart} item={item} />
                    </div>
                )
            })}

        </div>
    );
}

export default Shop;
