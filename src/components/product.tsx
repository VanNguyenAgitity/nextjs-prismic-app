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
          <Image
            alt={product.node.images.alt}
            src={ImageEssential}
            width={142}
            height={164}
            objectFit="contain"
          />   
        	<div className="flex flex-col ml-2">
            <span className={`text-black font-montserrat400 text-xs`}>{product.node.date}</span>
          </div>
        </a>
      </Link>
    </li>
  )
}