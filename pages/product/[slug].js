import React from 'react'
import {useRouter} from "next/router"
import data from "../../utils/data"
import Layout from '../../components/Layout'
import NextLink from "next/link"
import Image from 'next/image'
import db from '../../utils/db'
import Product from '../../models/Product'

export default function productScreen(props) {

    const {product} = props 
    //const router = useRouter()
    //const {slug} = router.query
    //const product = data.products.find(a => a.slug === slug)

    if(!product){
        return <div>Product N0t Found</div>
    }

    return (
        <Layout title={product.name} description={product.description} >
            
            <NextLink href='/' passHref>
                Go back home
            </NextLink>
            <main className='grid grid-cols-2'>
                <Image 
                    src={product.image}
                    alt={product.image}
                    width={640}
                    height={640}
                    layout="responsive"
                ></Image>
                <div>
                    <h3 className='text-2xl'>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>$ {product.price}</p>
                    <button>Add to Cart</button>
                </div>

            </main>
        </Layout>
    )
}


export async function getServerSideProps(context){
    const {params} = context
    const { slug } = params

    await db.connect()
    const product = await Product.findOne({slug}).lean()
    await db.disconnect()

    return {
      props: {
        product: db.convertDocToObj(product)
      }
    }
}