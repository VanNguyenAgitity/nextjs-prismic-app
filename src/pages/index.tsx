import Head from 'next/head'

import { getAllDatasForHome } from '../utils/api'

// Constant
import { CMS_NAME } from '../utils/constants'
import { FeatureList } from '../utils/constants'

// Components
import Layout from '../components/layout'
import Slide from '../components/slide'
import Feature from '../components/feature'
import ProductList from '../components/products'

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
        <div>  
          {/* <div className="mb-4 md:mb-0 text-lg">
            {heroData.date}
          </div> */}
          <Slide data={allDatas}/>
          <Feature featureList={FeatureList}/>
          <ProductList allDatas={allDatas}/>
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
