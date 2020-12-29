import Footer from './footer'
import Header from './header'
import MetaHead from './meta-head'
import Banner from './banner'

export default function Layout({ preview, children }) {
  return (
    <>
      <MetaHead />
      <Header/>      
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
