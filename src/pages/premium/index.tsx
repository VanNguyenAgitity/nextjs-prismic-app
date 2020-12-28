import Head from 'next/head'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'

export default function PremiumPage(preview) {
  return (
    <>
      <Layout preview={preview}>
          <Head>
            <title>Premium design goods</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Premium Page</h1>
          </Container>
      </Layout>
    </>
  )
}
