import { useCallback, useState } from 'react'
import Product from '../components/product'

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
				<li className="flex flex-col justify-between items-center p-p4 bg-white border border-solid border-gray-200">
					<span className="uppercase">Popular Product</span>
					<button onClick={moreProduct}>More Product</button>
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