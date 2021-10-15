import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { StoreProvider } from '../utils/Store'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider enableSystem={true} attribute="class"><StoreProvider><Component {...pageProps} /></StoreProvider></ThemeProvider> ) 
}

export default MyApp