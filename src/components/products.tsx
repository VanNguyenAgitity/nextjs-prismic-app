import Product from '../components/product'

export default function Index({ allDatas }) {
  return (
		<ul className="flex flex-wrap w-11/12 flex pb-8 my-6 mx-auto grid grid-cols-4 gap-4">
			{allDatas.map((p, i) => (
				<Product key={i} product={p} />
			))}
		</ul>
  )
}