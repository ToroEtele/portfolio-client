import '../styles/globals.css'
import { Navbar, Social } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      {/* <Social /> */}
    </>
  )
}

export default MyApp
