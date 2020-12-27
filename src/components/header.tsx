import Link from 'next/link'
import Image from 'next/image'
import Nav from './nav'
import Search from './search'

import COLORS from '../themes/colors'

export default function Header(props) {
  return ( 
    <div className="z-40 flex justify-between items-center h-20 pl-5 bg-color sticky top-20">
      <Link href="/">
        <Image
          alt="Logo"
          className="h-12 w-12"
          src='/logo-main.svg'
          width={191}
          height={22}
        />      
      </Link>     
      <Nav/>
      <div className="mr-40">
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
