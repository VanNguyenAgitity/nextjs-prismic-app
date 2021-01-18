import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import Layout from '../../components/layout'
import Banner from '../../components/banner'

import { getAllDatasForProducts } from '../../utils/api'
import { navListProduct } from '../../utils/constants'

export default function CatalogPage(preview) {
  const router = useRouter()
  return (
    <Layout>
      <>
        <Head>
          <title>Catalog Page</title>
        </Head>
        <Banner sex={'Men'} navList={navListProduct}/>
      </>
    </Layout>
  )
}
