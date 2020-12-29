import Link from 'next/link'

const Nav = () => (
  <div className="flex justify-center">
    <Link href='/'>
      <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">Home</a>
    </Link>
    <Link href='/'>
      <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">Shop</a>
    </Link>
    <Link href='/'>
      <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">Portfolio</a>
    </Link>
    <Link href='/'>
      <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">Page</a>
    </Link>
    <Link href='/'>
      <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">Elements</a>
    </Link>
  </div>
)

export default Nav