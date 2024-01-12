import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { ScrollTop } from '../components/ScrollTop'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact |Adeeso Oluwadamilola </title>
        <meta
          name="description"
          content="Feel free to reach out and let's talk about how we can work together."
        />
        <meta property="og:title" content="Contact | Adeeso Oluwadamilola" />
        <meta
          property="og:description"
          content="Feel free to reach out and let's talk about how we can work together."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Contact />
      <Footer />
    </>
  )
}
