import Container from '../components/container'
import Layout from '../components/layout'
import { getAllDatasForHome } from '../utils/api'
import Head from 'next/head'
import { CMS_NAME } from '../utils/constants'

export default function Index({ preview, allDatas }) {
  const heroData = allDatas[0].node
  const moreDatas = allDatas.slice(1)
  console.log('allDatas', allDatas, 'moreDatasmoreDatasmoreDatas', moreDatas)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Free Icons: Line, Glyph, Flat Style on Pixelbuddha with {CMS_NAME}</title>
        </Head>
        <Container>        
          <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
            <div className="mb-4 md:mb-0 text-lg">
              {heroData.date}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allDatas = await getAllDatasForHome(previewData)
  return {
    props: { preview, allDatas },
  }
}
