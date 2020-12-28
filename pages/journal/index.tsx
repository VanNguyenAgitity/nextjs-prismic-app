import Head from 'next/head'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'

export default function JournalPage(preview) {
  return (
    <>
      <Layout preview={preview}>
          <Head>
            <title>Free Icons: Line, Glyph, Flat Style on Pixelbuddha</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Journal Page</h1>
          </Container>
      </Layout>
    </>
  )
}
