import Prismic from 'prismic-javascript'

const REPOSITORY = 'nextjs-base'
const REF_API_URL = `https://nextjs-base.cdn.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://nextjs-base.cdn.prismic.io/graphql`
export const API_URL = 'https://nextjs-base.cdn.prismic.io/api/v2'
export const API_TOKEN = "MC5YLUk1b3hBQUFDRUFuTzY0.Klfvv73vv70lGl8NTCUB77-9Yu-_ve-_vUDvv73vv73vv71H77-9UB3vv715Fggf77-9X--_vVg"
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  console.log('999999999999999999999999999', query, 'previewDatapreviewData', previewData)
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllDatasForHome(previewData) {
  console.log('previewDatapreviewData333333333333', previewData)
  const data = await fetchAPI(
  `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            images
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data.allPosts.edges
}


export async function getAllDatasForProducts(previewData) {
  console.log('previewDatapreviewData333333333333', previewData)
  const data = await fetchAPI(
  `
    query {
      allProductss(sortBy: name_DESC) {
        edges {
          node {
            date
            name
            price_regular
            price_sale
            images
            style_new
            type_popular
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data.allProductss.edges
}