import Head from 'next/head'
import Menu from '@components/Menu'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Påskeleker 2023 - Solstua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>
      <main>
        <h1>PÅSKE<br/>LEKER<br/>2023</h1>          
      </main>

    </div>
  )
}
