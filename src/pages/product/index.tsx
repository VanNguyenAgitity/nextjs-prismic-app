import Head from 'next/head'
import Link from 'next/link'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'

export default function ProductPage(preview) {
  return (
    <>
      <Layout preview={preview}>
          <Head>
            <title>Product</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Product Page</h1>
          </Container>
      </Layout>
    </>
  )
}
