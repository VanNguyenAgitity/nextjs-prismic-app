import Link from 'next/link'
import Image from 'next/image'

import Button from '../components/button'
import ImageEssential from '../assets/images/products/t-shirt-essential.png'

export default function Product({ product }) {
  console.log('productproduct', product.node)
  return (
    <li className="p-4 w-3/12 p-6 mr-4 bg-white border border-solid border-gray-200">
      <Link href={`product/${product.node._meta.uid}`}>
        <a className="flex flex-col">
          <Button className="px-2 absolute top-0 right-0" rounded="rounded" type="text" text="sale" color="text-white" fontFamily="font-Montserrat400" bg="bg-blueless" fontSize="text-xss"/>
          <div className="m-6">
            <Image
              alt={product.node.images.alt}
              src={ImageEssential}
              width={142}
              height={164}
              objectFit="contain"
            />
          </div>
        	<div className="flex flex-col ml-2">
            <span className="text-gray-700 font-montserrat400 text-xs">{product.node.date}</span>
            <div className="flex">
              <span className="line-through text-gray-400 text-xss mr-4">$200.00 USD</span>
              <span className="text-blueless text-xss ">$200.00 USD</span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}