import Head from 'next/head'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faBorderAll, faList } from '@fortawesome/free-solid-svg-icons'

// Components
import Layout from '../../components/layout'
import Banner from '../../components/banner'
import ProductList from '../../components/products'
import BannerCatalog from '../../components/catalog/banner'

import { getAllDatasForProducts } from '../../utils/api'
import { navListProduct } from '../../utils/constants'
import Button from '../../components/button';


export default function CatalogPage({allProducts}) {
  const router = useRouter()
  return (
    <>
      <Layout>      
          <Head>
            <title>Catalog Page</title>
          </Head>
          <Banner sex={'Men'} navList={navListProduct}/>
          <div className="flex flex-col w-11/12 mx-auto border -mt-20 pb-4">
            <BannerCatalog/>
            <div className="border h-20 w-full flex">
                <div className="w-2/12 flex">
                  <span className="border-r	h-full w-8/12 flex items-center justify-center text-sx font-semibold w-48 font-montserrat uppercase text-black-200">Fillter</span>
                  <div className="w-4/12 flex items-center justify-center">
                    <FontAwesomeIcon icon={faSync} size="2x" color='blue' className="w-4 h-4"/>
                  </div>
                </div>
                <div className="w-10/12">
                  <div className="grid h-full grid-flow-col grid-cols-3 grid-rows-1">
                    <div className="border"></div>
                    <div className="border"></div>
                    <div className="grid h-full grid-flow-col grid-cols-2 grid-rows-1">
                      <div className="grid h-full grid-flow-col grid-cols-2 grid-rows-1">
                        <div className="border-r flex items-center justify-center">
                          <FontAwesomeIcon icon={faBorderAll} size="2x" color='blue' className="w-4 h-4"/>
                        </div>
                        <div className="border-r flex items-center justify-center">
                          <FontAwesomeIcon icon={faList} size="2x" color='blue' className="w-4 h-4"/>
                        </div>
                      </div>
                      <Button className="focus:outline-none uppercase h-full w-40 py-2" height="h-full" type="btton" bg="bg-blueless" text="View All" color="text-white" fontWeight="font-semibold" fontFamily="font-montserrat" fontSize="text-xm"/>
                    </div>
                  </div>
                  
                </div>
              </div>
            <div className="w-full flex">
              <div className="w-2/12 border">
              </div>
              <div className="w-10/12 p-4">
                <ProductList allDatas={allProducts} loadMoreNumber={4} type={'catalog'}/>
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
