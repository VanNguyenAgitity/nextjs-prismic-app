import Head from 'next/head'
import { useRouter } from 'next/router'
import { Pagination,  } from 'semantic-ui-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { queryCatalogContent } from '../../utils/prismicQueries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faBorderAll, faList, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Components
import Layout from '../../components/layout'
import Banner from '../../components/banner'
import Button from '../../components/button'
import ProductList from '../../components/products'
import BannerCatalog from '../../components/catalog/banner'

import RangePrice from '../../components/catalog/range-price'
import { Categories } from '../../utils/constants'


export default function CatalogPage({ itemsPerPage = 9 } ) {
  const router = useRouter()
  const { sex, category } = router.query
  const [catalogContent, setCatalogPosts] = useState([])
  const [page, setPage] = useState(1)

  // Fetch the Prismic initial Prismic content on page load
  useEffect(() => {
    const fetchPrismicContent = async () => {
      const queryResponse = await queryCatalogContent()
      const catalogContent = queryResponse.data.allProductss
      setCatalogPosts(catalogContent.edges)
    }
    fetchPrismicContent()
  }, [itemsPerPage])

  const [valueColor, setActiveColor] = useState('White')
  const changeColor = (color) => {
    setActiveColor(color)
  }

  const [valueSize, setActiveSize] = useState('S')
  const changeSize = (size) => {
    setActiveSize(size)
  }

  
  const totalPosts = catalogContent.length
  if (totalPosts < 1) return null  
  const producLifeStyle = catalogContent.filter(({ node }) => (node.categories === category && node.sex === sex && node.color === valueColor && node.size === valueSize))
  const productCollection = producLifeStyle[0] && producLifeStyle[0].node

  const firstPostIndex = (page - 1) * itemsPerPage
  const lastPostIndex = firstPostIndex + itemsPerPage
  const currentBlogPosts = catalogContent.slice(firstPostIndex, lastPostIndex)
  const totalPages = Math.ceil(catalogContent.length / itemsPerPage)

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
        <div className="flex flex-col w-11/12 mx-auto -mt-20">
          <BannerCatalog collection={productCollection}/>
          <div className="h-20 w-full flex border">
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
          <div className="w-full flex border">
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
                        <Link href={`/catalog?sex=${sex}&category=${val}`}>
                          <a className="rounded-t capitalize font-montserrat font-normal text-xs text-black hover:bg-gray-200 px-4 block whitespace-no-wrap">{val}</a>
                        </Link>
                        <span className="font-montserrat font-normal text-xs text-black">{catalogContent.filter(({ node }) => (node.categories === val && node.sex === sex)).length}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="group inline-block relative w-full mb-4">
                <button className=" w-full focus:outline-none text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
                  <FontAwesomeIcon icon={faChevronDown} size="2x" color='black' className="w-3 h-3"/>
                  <span className="ml-2 uppercase text-black text-xs">Color</span>
                </button>
                <div className="flex w-10/12 max-w-xs mx-auto justify-between">
                  <div className="flex w-full justify-between">
                    <label className="inline-flex items-center" onClick={()=>{changeColor('White')}}>
                      <input type="checkbox" checked={valueColor === 'White'} onChange={()=>{}}  value="white" className="form-checkbox bg-white text-white h-5 w-5 rounded-full shadow border border-solid border-gray-200"/>
                    </label>
                    <label className="inline-flex items-center" onClick={()=>{changeColor('Red')}}>
                      <input type="checkbox" checked={valueColor === 'Red'} onChange={()=>{}} value="red" className="form-checkbox bg-redless text-redless h-5 w-5 shadow rounded-full"/>
                    </label>
                    <label className="inline-flex items-center" onClick={()=>{changeColor('Yellow')}}>
                      <input type="checkbox" checked={valueColor === 'Yellow'} onChange={()=>{}} value="yellow" className="form-checkbox bg-yellow-400 text-yellow-400 h-5 w-5 shadow rounded-full"/>
                    </label>
                    <label className="inline-flex items-center" onClick={()=>{changeColor('Green')}}>
                      <input type="checkbox" checked={valueColor === 'Green'} onChange={()=>{}} value="green" className="form-checkbox bg-green-600 text-green-600 h-5 w-5 shadow rounded-full"/>
                    </label>
                  </div>
                </div>
              </div>

              <div className="group inline-block relative w-full my-4">
                <button className=" w-full focus:outline-none text-gray-700 font-semibold py-2 px-4 mb-4 inline-flex items-center">
                  <FontAwesomeIcon icon={faChevronDown} size="2x" color='black' className="w-3 h-3"/>
                  <span className="ml-2 uppercase text-black text-xs">Price Range</span>
                </button>
                <RangePrice/>
              </div>
              
              <div className="group inline-block relative w-full mt-4">
                <button className=" w-full focus:outline-none text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
                  <FontAwesomeIcon icon={faChevronDown} size="2x" color='black' className="w-3 h-3"/>
                  <span className="ml-2 uppercase text-black text-xs">Size</span>
                </button>
                <div className="flex w-10/12 max-w-xs mx-auto justify-between">
                  <div className="flex w-full justify-between border grid grid-cols-4">
                    <label className={`${valueSize === 'S' ? 'bg-white shadow' : null} cursor-pointer py-2 border-r inline-flex items-center`} onClick={()=>{changeSize('S')}}>
                      <span className="text-xs mx-auto">S</span>
                    </label>
                    <label className={`${valueSize === 'M' ? 'bg-white shadow' : null} cursor-pointer py-2 border-r inline-flex items-center`} onClick={()=>{changeSize('M')}}>
                      <span className="text-xs mx-auto">M</span>
                    </label>
                    <label className={`${valueSize === 'L' ? 'bg-white shadow' : null} cursor-pointer py-2 border-r inline-flex items-center`} onClick={()=>{changeSize('L')}}>
                      <span className="text-xs mx-auto">L</span>
                    </label>
                    <label className={`${valueSize === 'XL' ? 'bg-white shadow' : null} cursor-pointer py-2 inline-flex items-center`} onClick={()=>{changeSize('XL')}}>
                      <span className="text-xs mx-auto">XL</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-9/12 p-4 border-l">
              <ProductList allDatas={currentBlogPosts} loadMoreNumber={4} type={'catalog'}/>
            </div>
          </div>
          <div className="w-full flex border">
            <Pagination
              activePage={page}
              onPageChange={(event, data) => setPage(Number(data.activePage))}
              totalPages={totalPages}
              firstItem={null}
              lastItem={null}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

// export async function getServerSideProps({previewDataProduct}) {
//   const allProducts = await getAllDatasForCatalog(previewDataProduct)
//   return {
//     props: { allProducts },
//   }
// }
