import Link from 'next/link'
import Image from 'next/image'

import Button from '../components/button'

export default function Product({ product }) {
  console.log('productproduct', product.node)
  return (
    <li className={`border border-solid border-gray-200 ${product.node.style_new ? "col-span-3 px-p4 bg-blueless" : "p-p4 bg-white"}`}>
      <Link href={`product/${product.node._meta.uid}`}>
        <a className={`flex ${product.node.style_new ? "flex-row-reverse h-full justify-between" : "flex-col"}`}>
          {product.node.price_sale &&
            <Button className="px-p4 absolute top-p4 right-p4" rounded="rounded" type="text" text="sale" color="text-white" fontFamily="font-Montserrat400" bg="bg-blueless" fontSize="text-xss"/>
          }
         
          <div className={`flex ${product.node.style_new ? "m-0 h-full" : "w-2/4 h-2/4 my-4"}`}>
            <Image
              alt={product.node.images.alt}
              src={product.node.images.url}
              width={`${product.node.style_new ? 536 : 142}`}
              height={`${product.node.style_new ? '100%' : 164}`}
              objectFit={`${product.node.style_new ? "cover" : "contain"}`}
            />
          </div>
        	<div className={`flex flex-col ${product.node.style_new ? 'py-10' : ''}`}>
            {product.node.style_new &&
              <Button className="px-2 mb-4" rounded="rounded" type="text" text="new" color="text-blueless" fontFamily="font-Montserrat400" bg="bg-white" fontSize="text-xss"/>
            }
            {product.node.style_new &&
             <span className="uppercase text-white font-montserrat text-sm my-2">LifeStyle</span>
            }
            <span className={`${product.node.style_new ? "text-white font-playfair700 text-2xl" : "text-gray-700 font-montserrat400 text-xs"}`}>{product.node.name}</span>
            {product.node.style_new &&
              <div className="rounded-2xl bg-white p-2 flex justify-center items-center divide-x">
                <span className="text-blueless text-xss pr-2">{`$ ${product.node.price_regular} USD`}</span>
                <Button className="px-2 uppercase"type="text" text="By Now" color="text-blueless" fontFamily="font-Montserrat400" bg="bg-white" fontSize="text-xss"/>                
              </div>
            }
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