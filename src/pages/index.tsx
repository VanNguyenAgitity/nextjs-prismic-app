import Head from 'next/head'

import { getAllDatasForHome, getAllDatasForProducts } from '../utils/api'

// Constant
import { CMS_NAME } from '../utils/constants'
import { FeatureList } from '../utils/constants'

// Components
import Layout from '../components/layout'
import Slide from '../components/slide'
import Feature from '../components/feature'
import ProductList from '../components/products'

export default function Index({ preview, allDatas, allProducts }) {
  console.log('allDatas', allDatas, 'allProductsallProducts', allProducts)
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
          <ProductList allDatas={allProducts}/>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewDataPost, previewDataProduct }) {
  const allDatas = await getAllDatasForHome(previewDataPost)
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { preview, allDatas, allProducts},
  }
}
