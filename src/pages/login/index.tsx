import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../../utils/constants'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login with {CMS_NAME}</title>
      </Head>
      <Container>  
        <form className='flex w-full max-w-sm mx-auto space-x-3 pt-8'>
          <input className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
          <button className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
            Login
          </button>
        </form>
      </Container>
    </>
  )
}

// localhost:3000/login