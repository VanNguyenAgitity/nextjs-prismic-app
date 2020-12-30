import Container from './container'
import Nav from './nav'
import { NavFooter } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-blackless border-t border-blackless">
      <Container>
        <div className="flex w-144 flex justify-between items-center">
          <a href="/" className="font-playfair text-2xl text-white">
            ModaX
          </a>
          <Nav navList={NavFooter}/>
        </div>
      </Container>
    </footer>
  )
}
