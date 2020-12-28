import Footer from './footer'
import Header from './header'
import MetaHead from './meta-head'
import Banner from './banner'

export default function Layout({ preview, children }) {
  console.log('preview', preview)
  return (
    <>
      <MetaHead />
      <Banner />
      <Header type={preview}/>      
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
