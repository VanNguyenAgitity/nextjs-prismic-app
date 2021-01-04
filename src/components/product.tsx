import Link from 'next/link'
import Image from 'next/image'

import Button from '../components/button'
import ImageEssential from '../assets/images/products/t-shirt-essential.png'

export default function Product({ product }) {
  console.log('productproduct', product.node)
  return (
    <li className={`p-6 bg-white border border-solid border-gray-200 ${product.node.style_new ? "col-span-3" : ""}`}>
      <Link href={`product/${product.node._meta.uid}`}>
        <a className="flex flex-col">
          <Button className="px-2 absolute -top-3 -right-3" rounded="rounded" type="text" text="sale" color="text-white" fontFamily="font-Montserrat400" bg="bg-blueless" fontSize="text-xss"/>
          <div className="m-p4 flex justify-center">
            <Image
              alt={product.node.images.alt}
              src={product.node.images.url}
              width={142}
              height={164}
              objectFit="contain"
            />
          </div>
        	<div className="flex flex-col">
            <span className="text-gray-700 font-montserrat400 text-xs">{product.node.name}</span>
            <div className="flex flex-wrap">
              {product.node.price_sale &&
                <span className="line-through text-gray-400 text-xss mr-4">{`$ ${product.node.price_sale} USD`}</span>
              }
              {product.node.price_regular &&
                <span className="text-blueless text-xss">{`$ ${product.node.price_regular} USD`}</span>
              }
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}