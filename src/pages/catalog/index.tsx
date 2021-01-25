import Head from 'next/head'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faBorderAll, faList, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Components
import Layout from '../../components/layout'
import Banner from '../../components/banner'
import Button from '../../components/button'
import ProductList from '../../components/products'
import BannerCatalog from '../../components/catalog/banner'

import { getAllDatasForProducts } from '../../utils/api'
import { Categories } from '../../utils/constants'


export default function CatalogPage({allProducts}) {
  const router = useRouter()
  const { sex, category } = router.query
  console.log('sex333333', sex, 'category33333', category)
  const productCategories = allProducts.filter(({ node }) => (node.categories && node.sex === sex))
  const producLifeStyle = allProducts.filter(({ node }) => (node.categories === category && node.sex === sex))
  const productCollection = producLifeStyle[0] && producLifeStyle[0].node

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
   
  return (
    <>
      <Layout>
        <Head>
          <title>Catalog Page</title>
        </Head>
        <Banner sex={sex} navList={navListProduct}/>
        <div className="flex flex-col w-11/12 mx-auto border -mt-20">
          <BannerCatalog collection={productCollection}/>
          <div className="h-20 w-full flex border-b">
            <div className="w-3/12 flex">
              <span className="border-r	h-full w-8/12 flex items-center justify-center text-sx font-semibold font-montserrat uppercase text-black-200">Fillter</span>
              <div className="w-4/12 flex items-center justify-center">
                <FontAwesomeIcon icon={faSync} size="2x" color='blue' className="w-4 h-4"/>
              </div>
            </div>
            <div className="w-9/12 border-l">
              <div className="grid h-full grid-flow-col grid-cols-3 grid-rows-1">
                <div className="border-r"></div>
                <div className="border-r"></div>
                <div className="grid h-full grid-flow-col grid-cols-2 grid-rows-1">
                  <div className="grid h-full grid-flow-col grid-cols-2 grid-rows-1">
                    <div className="border-r flex items-center justify-center">
                      <FontAwesomeIcon icon={faBorderAll} size="2x" color='blue' className="w-4 h-4"/>
                    </div>
                    <div className="border-r flex items-center justify-center">
                      <FontAwesomeIcon icon={faList} size="2x" color='blue' className="w-4 h-4"/>
                    </div>
                  </div>
                  <Button className="focus:outline-none uppercase h-full w-full py-2" height="h-full" type="btton" bg="bg-blueless" text="View All" color="text-white" fontWeight="font-semibold" fontFamily="font-montserrat" fontSize="text-xm"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex flex-col w-3/12">
              <div className="w-full">
                <div className="group inline-block relative w-full">
                  <button className=" w-full focus:outline-none text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
                    <FontAwesomeIcon icon={faChevronDown} size="2x" color='black' className="w-3 h-3"/>
                    <span className="ml-2 uppercase text-black text-xs">Categories</span>
                  </button>
                  <ul className=" w-full text-gray-700 pt-1 p-4 group-hover:block">
                    {Object.entries(Categories).map(([key, val], i) => (
                      <li className="p-1 flex justify-between w-full" key={i}>
                        <a
                          className="rounded-t capitalize font-montserrat font-normal text-xs text-black hover:bg-gray-200 px-4 block whitespace-no-wrap"
                          href={`/catalog?sex=${sex}&category=${val}`}
                          >{val}</a
                        >
                        <span className="font-montserrat font-normal text-xs text-black">{allProducts.filter(({ node }) => (node.categories === val && node.sex === 'Women')).length}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
              <div className="w-full">
                <div className="group inline-block relative w-full">
                  <button className=" w-full focus:outline-none text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
                    <FontAwesomeIcon icon={faChevronDown} size="2x" color='black' className="w-3 h-3"/>
                    <span className="ml-2 uppercase text-black text-xs">Color</span>
                  </button>
                </div> 
              </div>
              <div className="w-full">
                <div className="group inline-block relative w-full">
                  <button className=" w-full focus:outline-none text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
                    <FontAwesomeIcon icon={faChevronDown} size="2x" color='black' className="w-3 h-3"/>
                    <span className="ml-2 uppercase text-black text-xs">Size</span>         
                  </button>
                </div>
              </div>
            </div>
            <div className="w-9/12 p-4 border-l">
              <ProductList allDatas={producLifeStyle} loadMoreNumber={4} type={'catalog'}/>
            </div>
          </div>
        </div>
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
