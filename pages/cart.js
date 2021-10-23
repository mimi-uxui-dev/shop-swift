import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/Store'
import NextLink from "next/link"
import Image from "next/image"

export default function cartScreen() {
    const { state } = useContext(Store)
    const { cart } = state

    return (
        <Layout>
           
                <div>
                    {
                        cart.cartItems.length === 0 ? (<div>Cart is empty. <NextLink href="/">Go Shopping</NextLink></div>) : (
                            <table className='w-full'>
                                <thead>
                                    <tr className='grid grid-cols-5'>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th align="right">Quantity</th>
                                        <th align="right">Price</th>
                                        <th align="right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.cartItems.map((item) => (
                                            <tr className='grid grid-cols-5'>
                                                <td>
                                                    <NextLink href={`/product/${item.slug}`}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                        ></Image>
                                                    </NextLink>
                                                </td>
                                                <td>
                                                    <NextLink href={`/product/${item.slug}`}>
                                                        <h3>{item.name}</h3>
                                                    </NextLink>
                                                </td>
                                                <td align="right">
                                                    <select value={item.quantity} >
                                                        {
                                                            [...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}> {x + 1} </option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td align="right">
                                                    <h3> {item.price} </h3>
                                                </td>
                                                <td align="right">
                                                    <button>x</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div>
                    <h3>Subtotal ({cart.cartItems.reduce((a, c) => a + c.quantity, 0)} {' '} items ) : {' $'} {cart.cartItems.reduce((a ,c) => a + c.quantity * c.price, 0)}  </h3>
                    <button>Check Out</button>
                </div>
           
        </Layout>
    )
}