import Product from '../components/product'

export default function Index({ allDatas }) {
  return (
		<ul className="w-11/12 flex pb-8 my-6 mx-auto">
			{allDatas.map((p, i) => (
				<Product key={i} product={p} />
			))}
		</ul>
  )
}