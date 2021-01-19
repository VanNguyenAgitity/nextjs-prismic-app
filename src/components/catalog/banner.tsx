import Image from 'next/image'
import Button from '../../components/button'
import productImage from '../../assets/images/products/t-shirt-flecked.png'

const Banner = () => (
  <div className="z-50 p-p4 h-60 flex flex-col justify-top pt-8 bg-graylight grid h-full grid-flow-col grid-cols-3 grid-rows-1">
    <div className='flex flex-col'>
      <span className="uppercase text-white tracking-widest font-montserrat font-semibold text-xs my-2">LifeStyle</span>
      <span className={`text-white font-playfair font-bold text-2xl mb-2`}>New Now: Striped cotton</span>
          
      <Button className="py-2 px-8 mt-8 rounded-full "type="text" text="More Info" color="text-graylight" fontWeight="font-semibold" fontFamily="font-montserrat" bg="bg-white" fontSize="text-xs"/>
    </div>
    <div className={`flex "h-2/4 my-4 mx-auto`}>
      <Image
        alt={'Catalog'}
        src={productImage}
        width={142}
        height={164}
        objectFit={'cover'}
      />
    </div>
    
  </div>
)

export default Banner