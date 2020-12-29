import Image from 'next/image'
import IconCart from '../assets/icons/cart.png'

const ShopCart = () => (
  <div className="flex justify-center self-center">    
    <Image
      alt="Icon cart"
      src={IconCart}
      width={27}
      height={26}
    />   
  </div>
)

export default ShopCart