import Image from 'next/image'
import Button from '../../components/button'
//import productImage from '../../assets/images/products/t-shirt-flecked.png'

export default function Banner({ collection }) {
  const collectionData = collection && collection.body && collection.body.filter(({ type }) => type === 'collection')
  const collectionImage = collectionData && collectionData[0] && collectionData[0].fields[0].image.url
  const collectionTitle = collectionData && collectionData[0] && collectionData[0].primary.title_collection
  const productImage = collection && collection.images.url
  console.log('collectioncollection', collectionData)
  return (
    <div className="z-50 px-p4 h-60 flex flex-col justify-top bg-graylight grid h-full grid-flow-col grid-cols-3 grid-rows-1">
      <div className='flex flex-col py-8'>
        <span className="uppercase text-white tracking-widest font-montserrat font-semibold text-xs my-2">LifeStyle</span>
        <span className={`text-white font-playfair font-bold text-2xl mb-2`}>New Now: Striped cotton</span>
            
        <Button className="py-2 px-8 mt-8 rounded-full "type="text" text="More Info" color="text-graylight" fontWeight="font-semibold" fontFamily="font-montserrat" bg="bg-white" fontSize="text-xs"/>
      </div>
      {productImage &&
        <div className={`flex "h-2/4 my-4 mx-auto`}>
          <Image
            alt={'Catalog'}
            src={productImage}
            width={192}
            height={164}
            objectFit={'contain'}
          />
        </div>
      }
      <div className="flex">
        {collectionImage &&
          <div className={`flex "h-full`}>
            <Image
              alt={'Catalog'}
              src={collectionImage}
              width={160}
              height={267}
              objectFit={'cover'}
            />
          </div>
        }
        <div className='flex flex-col my-6 ml-2'>
          <span className="uppercase text-white tracking-widest font-montserrat font-semibold text-xss my-2">LifeStyle</span>
          <span className={`text-white font-playfair font-bold text-xl mb-2`}>{collectionTitle}</span>              
          <Button className="py-2 px-8 mt-8 rounded-full "type="text" text="More Info" color="text-graylight" fontWeight="font-semibold" fontFamily="font-montserrat" bg="bg-white" fontSize="text-xss"/>
        </div>
      </div>
    </div>
  )
}
