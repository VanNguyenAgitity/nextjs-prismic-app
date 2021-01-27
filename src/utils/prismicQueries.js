import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { client } from './prismicHelpers'

/*
 * Catalogpage query
 */
const catalogQuery = gql`
  query catalogQuery {
    allProductss {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          _meta {
            uid
            type
          }
          date
          name
          price_regular
          price_sale
          images
          style_new
          type_popular
          color
          size
          sex
          categories
          blog_popular
          likes
          rating_star
          comments
          title
          body {
            ... on ProductsBodyCollection {
              type
              primary{
                title_collection
              }
              fields{
                image
              }
            }
            __typename
          }
        }
      }
    }
  }
`

export const queryCatalogContent = async () => {
  const previewCookie = Cookies.get('io.prismic.preview')

  const queryOptions = {
    query: catalogQuery,
  }

  if (previewCookie) {
    queryOptions.context = {
      headers: {
        'Prismic-ref': previewCookie,
      },
    }
  }

  return client.query(queryOptions)
}
