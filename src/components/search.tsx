import Link from 'next/link'
import Image from 'next/image'
import IconSearch from '../assets/icons/search.svg'

const Search = () => (
  <div className="flex justify-center">    
    <Image
      alt="Logo"
      className="h-12 w-12"
      src={IconSearch}
      width={20}
      height={20}
    />   
  </div>
)

export default Search