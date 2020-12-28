import Head from 'next/head'
import Link from 'next/link'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'
import Nav from '../../components/nav'

export default function DownloadPage(preview) {
  return (
    <>
      <Layout preview={preview}>
          <Head>
            <title>Free Icons: Line, Glyph, Flat Style on Pixelbuddha</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Download Page</h1>
          </Container>
      </Layout>
    </>
  )
}
