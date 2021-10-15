import React from 'react'
import {useRouter} from "next/router"
import data from "../../utils/data"
import Layout from '../../components/Layout'
import NextLink from "next/link"
import Image from 'next/image'

function productScreen() {
    const router = useRouter()
    const {slug} = router.query
    const product = data.products.find(a => a.slug === slug)

    if(!product){
        return <div>Product N0t Found</div>
    }

    return (
        <Layout title={product.name}>
            
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
                    
                </div>

            </main>
        </Layout>
    )
}

export default productScreen