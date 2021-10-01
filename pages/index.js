import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <ul>
          <li>Product 01</li>
          <li>Product 02</li>
          <li>Product 03</li>
        </ul>
      </div>
    </Layout>
  )
}