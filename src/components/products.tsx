import { useCallback, useState } from 'react'
import Image from 'next/image'
import Product from '../components/product'
import IconFire from '../assets/images/fire.png'

export default function Index({ allDatas }) {
	const [ loadNum, setLoadNum] = useState(4); // Default number of posts dislplayed

	const [ loadNumMore, setLoadNumMore] = useState(4);

	const productTypePopular = allDatas.filter(({ node }) => node.type_popular);
	const productTypeNewStyle = allDatas.filter(({ node }) => !node.type_popular);

	console.log('productTypePopularproductTypePopular', productTypeNewStyle)
  const moreProduct = useCallback(() => {
    setLoadNum(prevRange => prevRange + 4);
	},[])

	const loadMoreProduct = useCallback(() => {
    setLoadNumMore(prevRange => prevRange + 4);
	},[])
	
  return (
		<>
			<ul className="flex flex-wrap w-11/12 flex pb-8 my-6 mx-auto grid grid-cols-4 gap-4">
				<li className="flex flex-col justify-between items-center px-p4 py-10 bg-black border border-solid border-gray-200">
					<Image
						alt="Icon fire"
						src={IconFire}
						width={35}
						height={43}
						objectFit="contain"
					/>
					<span className="uppercase text-white text-xm text-center">Popular Product</span>
					<button className="text-white text-xs" onClick={moreProduct}>More Product</button>
				</li>
				{productTypePopular.slice(0, loadNum).map((p, i) => (
					<Product key={i} product={p}/>
				))}
				{productTypeNewStyle.slice(0, loadNumMore).map((p, i) => (
					<Product key={i} product={p}/>
				))}
			</ul>
			<button className="w-full m-auto" onClick={loadMoreProduct}>Load More</button>
		</>
  )
}