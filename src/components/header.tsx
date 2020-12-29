import Link from 'next/link'
import Image from 'next/image'
import Nav from './nav'
import Search from './search'

import COLORS from '../themes/colors'
import MainLogo from '../assets/icons/main-logo.svg'
import MainBurger from '../assets/icons/main-burger.svg'

export default function Header(props) {
  return ( 
    <div className="z-40 flex justify-between items-center h-20 pl-5 bg-color sticky top-20 md:top-0">     
      <button className='sx:hidden'>
        <MainBurger/>
      </button>
      <a href="/">
        <MainLogo/>
      </a>
      <Nav/>
      <div className="flex mr-4 w-6 h-6 self-center">
        <Search />
      </div>
      <style jsx>{`
        .bg-color {
          background: ${props.type == 'plus' ? COLORS.navGray : COLORS.navOrange};
        }
      `}</style>
    </div>
  )
}
