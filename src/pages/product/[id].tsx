import { useRouter } from 'next/router'
import Head from 'next/head'

import { getAllDatasForProducts } from '../../utils/api'

// Components
import Layout from '../../components/layout'
import ProductList from '../../components/products'
import Banner from '../../components/banner'

export default function Product({ preview, allProducts }){
  const { query } = useRouter()
  const dataProduct = allProducts.filter(({ node }) => node._meta.uid === query.id)
  const productTypePopular = allProducts.filter(({ node }) => node.type_popular && !node.blog_popular)  
  const sexType = dataProduct[0].node.sex
  const navList =  [
    {
      label: "Home",
      path: "/",
      icon: ">"
    },
    {
      label: "Catalog",
      path: "/catalog",
      icon: ">"
    },
    {
      label: "Men",
      path: "/#",
      icon: ">"
    },
    {
      label: "Clothing",
      path: "/#",
      icon: ">"
    }
  ]
  return (
    <>
      <Layout preview={'product'}>
        <Head>
          <title> Product Detail</title>
        </Head>
        <Banner sex={sexType} navList={navList}/>
        <ProductList allDatas={productTypePopular} loadMoreNumber={3}/>
      </Layout>
    </>
  )
}

export async function getServerSideProps({previewDataProduct }) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { allProducts },
  }
}