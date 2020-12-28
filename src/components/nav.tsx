import Link from 'next/link'

const Nav = () => (
  <div className="mb-5 mt-5 flex justify-center">
    <Link href='/all'>
      <a className="text-white p-2 m-2 font-bold text-lg">Downloads</a>
    </Link>
    <Link href='/plus'>
      <a className="text-white p-2 m-2 font-bold text-lg">Plus</a>
    </Link>
    <Link href='/journal'>
      <a className="text-white p-2 m-2 font-bold text-lg">Journal</a>
    </Link>
    <Link href='/premium'>
      <a className="text-white p-2 m-2 font-bold text-lg">Premium</a>
    </Link>
  </div>
)

export default Nav