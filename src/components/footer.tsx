import Container from './container'
import Nav from './nav'
import SocialIcons from './social'
import Contact from './contact'
import { NavFooter } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="px-24 bg-blackless border-t border-blackless py-8 flex justify-between">
      <div className="flex flex-col">
        <div className="flex w-288 justify-between items-center">
          <a href="/" className="font-playfair text-2xl text-white">
            ModaX
          </a>
          <Nav navList={NavFooter}/>
        </div>
        <div className="flex w-320 justify-between mt-6">
          <SocialIcons/>
          <div className='py-2 px-0 w-98 flex flex-col'>
            <h3 className="uppercase text-xs text-white font-montserrat mb-4">Subscribe To News</h3>
            <form className='flex justify-between'>
              <input className='bg-gray-200 shadow-inner p-2 w-72 text-xs' id='email' type='email' aria-label='email address' placeholder='Email Address' />
              <button className='bg-white hover:bg-white-700 text-blackless shadow px-9 py-0 text-xs' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Contact />
      </div>
    </footer>
  )
}
