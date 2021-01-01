import Nav from './nav'
import Search from './search'
import ShopCart from './shop-cart'

import Button from '../components/button'
import { NavHeader } from '../utils/constants'

export default function Header(props) {
  return (
    <div className="z-40 px-24 flex justify-between items-center h-20 bg-blueless">
      <div className="flex w-144 flex justify-between items-center">
        <a href="/" className="font-playfair900Italic text-2xl text-white">
          Be.Pro
        </a>
        <Nav navList={NavHeader}/>
      </div>
      <div className="flex self-center w-72 justify-between">
        <div className="flex w-40">
          <Button type="text" text="Log in" color="text-white" fontFamily="font-montserrat" fontSize="text-xs" textTransform="uppercase"/>
          <Button type="text" text="Sign up" color="text-white" fontFamily="font-montserrat" fontSize="text-xs" textTransform="uppercase"/>
        </div>
        <div className="flex w-24 justify-between">
          <ShopCart/>
          <Search />
        </div>
      </div>
    </div>
  )
}
