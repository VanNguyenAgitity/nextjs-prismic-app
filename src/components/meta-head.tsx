import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../utils/constants'

export default function MetaHead() {
  return (
    <Head>
      <link rel="icon" href="/logo-main.svg" type="image/x-icon"></link>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
