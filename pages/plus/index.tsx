import Head from 'next/head'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'
import Nav from '../../components/nav'

export default function PlusPage(preview) {
  return (
    <>
      <Layout preview='plus'>
          <Head>
            <title>Join Pixelbuddha Plus Membership</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Plus Page</h1>
          </Container>
      </Layout>
    </>
  )
}
