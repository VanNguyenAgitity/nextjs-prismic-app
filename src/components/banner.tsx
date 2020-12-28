import Link from 'next/link'
import Image from 'next/image'
import ImageHero from '../assets/images/top-banner.jpg'

const Banner = () => (
  <div className="z-50 flex justify-center bg-black sticky top-0">
    <Link href='/all' as='/all'>
      <Image
        alt="Logo"
        className="h-12 w-12"
        src={ImageHero}
        width={940}
        height={80}
      />   
    </Link>   
  </div>
)

export default Banner