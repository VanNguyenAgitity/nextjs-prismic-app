import Layout from '../components/layout'
import { getAllDatasForHome } from '../utils/api'
import Head from 'next/head'
import { CMS_NAME } from '../utils/constants'
import Slide from '../components/slide'

export default function Index({ preview, allDatas }) {
  const heroData = allDatas[0].node
  const moreDatas = allDatas.slice(1)
  console.log('allDatas', allDatas, 'moreDatasmoreDatasmoreDatas', moreDatas)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title> Be.Pro with {CMS_NAME}</title>
        </Head>
        <div className="bg-blueless">  
          {/* <div className="mb-4 md:mb-0 text-lg">
            {heroData.date}
          </div> */}
          <Slide data={allDatas}/>
        </div>
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
