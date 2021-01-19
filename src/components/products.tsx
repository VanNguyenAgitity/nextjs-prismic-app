import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import Product from '../components/product'
import IconFire from '../assets/images/fire.png'

export default function Products({ allDatas, loadMoreNumber, type }) {
  const [ loadNum, setLoadNum] = useState(loadMoreNumber)

	const [ loadNumMore, setLoadNumMore] = useState(4)
	
	const [ loadNumCatalog, setLoadNumCatalog] = useState(9)

  const productTypePopular = allDatas.filter(({ node }) => node.type_popular && !node.blog_popular)
  const productTypeNewStyle = allDatas.filter(({ node }) => !node.type_popular && !node.blog_popular)
	const prodcutStyleLength = productTypeNewStyle && productTypeNewStyle.length
	const productCatalog = allDatas.filter(({ node }) => !node.style_new && !node.blog_popular)
  const moreProduct = useCallback(() => {
    setLoadNum(prevRange => prevRange + loadMoreNumber)
  },[])

  const loadMoreProduct = useCallback(() => {
		setLoadNumMore(prevRange => prevRange + 4)
	},[])

	const loadMoreCatalog = useCallback(() => {
		setLoadNumCatalog(prevRange => prevRange + 9)
	},[])
	
	return (
		<>
			<ul className={`flex flex-wrap flex pb-8 ${type!=='catalog' ? "my-6 w-11/12 grid grid-cols-4 gap-4" : "grid grid-cols-3 gap-3"} mx-auto `}>
				{type!=='catalog' &&
					<li className="flex flex-col justify-between items-center px-p4 py-10 bg-black border border-solid border-gray-200">
						<Image
							alt="Icon fire"
							src={IconFire}
							width={35}
							height={43}
							objectFit="contain"
						/>
						<span className="uppercase text-white text-xm text-center ">Popular Product</span>
						{!(productTypePopular && productTypePopular.length <= loadNum) &&
							<button className="focus:outline-none text-white text-xs font-montserrat font-normal" onClick={moreProduct}>More Product</button>
						}
					</li>
				}
				{type!=='catalog' &&
				<>
					{productTypePopular.slice(0, loadNum).map((p, i) => (
						<Product key={i} product={p}/>
					))}
					{productTypeNewStyle.slice(0, loadNumMore).map((p, i) => (
						<Product key={i} product={p}/>
					))}
				</>
				}
				{type==='catalog' &&
					<>
						{productCatalog.slice(0, loadNumCatalog).map((p, i) => (
							<Product key={i} product={p}/>
						))}
					</>
				}			
			</ul>
			{!(prodcutStyleLength <= loadNumMore) && type!=='catalog' &&
				<div className="flex m-auto w-28 mb-8">
					<FontAwesomeIcon icon={faSyncAlt} size="sm" color='gray' className="w-4 h-4"/>
					<button className="focus:outline-none w-full uppercase text-xs font-montserrat font-semibold" onClick={loadMoreProduct}>Load More</button>
				</div>
			}
			{!(productCatalog.length <= loadNumCatalog) && type==='catalog' &&
				<div className="flex m-auto w-28 mb-8">
					<FontAwesomeIcon icon={faSyncAlt} size="sm" color='blue' className="w-4 h-4"/>
					<button className="focus:outline-none w-full uppercase text-xs font-montserrat font-semibold" onClick={loadMoreCatalog}>Load More</button>
				</div>
			}
		</>
  )
}