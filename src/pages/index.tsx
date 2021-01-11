import Head from 'next/head'

import { getAllDatasForHome, getAllDatasForProducts, getAllDataForPattern } from '../utils/api'

// Constant
import { CMS_NAME } from '../utils/constants'
import { FeatureList } from '../utils/constants'

// Components
import Layout from '../components/layout'
import Slide from '../components/slide'
import Feature from '../components/feature'
import LogoList from '../components/logos'
import ProductList from '../components/products'
import ProductPattern from '../components/product-pattern'
import Blog from '../components/blog'

export default function Index({ preview, allDatas, allProducts, allPattern }) {
  console.log('allDatas', allDatas, 'allProductsallProducts', allProducts)
  const settings = {
		dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }
  const dataBannerMain = allDatas.filter(({ node }) => !node.cover);
  const dataBannerSub = allDatas.filter(({ node }) => node.cover);
  const productBlogPopular = allProducts.filter(({ node }) => node.blog_popular);
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
          <Slide data={dataBannerMain} setting={settings}/>
          <Feature featureList={FeatureList}/>
          <ProductList allDatas={allProducts}/>
          <Slide data={dataBannerSub} setting={settings}/>
          <ProductPattern allDatas={allPattern}/>
          <Blog  data={productBlogPopular}/>
          <LogoList/>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewDataPost, previewDataProduct, previewDataPattern }) {
  const allDatas = await getAllDatasForHome(previewDataPost)
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  const allPattern = await getAllDataForPattern(previewDataPattern)
  return {
    props: { preview, allDatas, allProducts, allPattern},
  }
}
