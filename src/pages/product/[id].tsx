import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'
import MetaHead from '../../components/meta-head'

import { getAllDatasForProducts } from '../../utils/api'

// Components
import ProductList from '../../components/products'
import Banner from '../../components/banner'
import Tabs from '../../components/tab'
import SliderNav from '../../components/product/slide-nav'
import InfoProduct from '../../components/product/info'

export default function Product({ preview, allProducts }){
  const { query } = useRouter()
  const { sex, category } = query
  const navListProduct =[
    {
      label: "Home",
      path: "/",
      icon: ""
    },
    {
      label: "Catalog",
      path: `/catalog?sex=${sex}&category=${category}`,
      icon: ""
    },
    {
      label: `${sex}`,
      path: "/#",
      icon: ""
    },
    {
      label: `${category}`,
      path: "/#",
      icon: ""
    }
  ]
  const dataProduct = allProducts && allProducts.filter(({ node }) => node._meta.uid === query.id)
  const dataImagesProduct = dataProduct && dataProduct.map(({ node }) => node.images) 
  const dataProductLength = dataProduct.length > 0
  const productTypePopular = dataProductLength && allProducts.filter(({ node }) => node.type_popular && !node.blog_popular)
  
  const imagesRelative = []
  const imagesListProduct = Object.values(dataImagesProduct[0])
  Object.keys(imagesListProduct).forEach(function (item) {
    if(typeof imagesListProduct[item]== 'object' && imagesListProduct[item]!= null){
      if(imagesListProduct[item].url) {
        imagesRelative.push(imagesListProduct[item])
      }
    }
  })
  
  const productReviewComments = dataProduct[0].node.body && dataProduct[0].node.body.filter(({ type }) => type === 'comments')
  const numComments = productReviewComments && productReviewComments.length

   return (
    <>     
      <Head>
        <title> Product Detail</title>
      </Head>
      <MetaHead />
      <Header/>
      {dataProductLength && 
        <div className=''>
          <Banner sex={sex} navList={navListProduct}/>
          <div className="flex flex-col m-auto -mt-20 items-center justify-between bg-white w-11/12 h-full border-solid border	sborder-gray-50">
          <div className="flex w-full">
            <InfoProduct product={dataProduct[0].node}/>
            {imagesRelative.length > 0 &&
              <SliderNav dataProduct={imagesRelative}/>
            }
          </div>
            {numComments > 0 &&
              <Tabs reviews={productReviewComments}/>
            }
            <ProductList allDatas={productTypePopular} loadMoreNumber={3} type='popular'/>
          </div>
        </div>
      }
      <Footer />
    </>
  )
}

export async function getServerSideProps({previewDataProduct }) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { allProducts },
  }
}
