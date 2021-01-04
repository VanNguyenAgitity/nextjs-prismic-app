import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Product() {
  const { query } = useRouter()
  console.log('queryquery', query)
  return (
    <>   
      <h2 className="mb-10">Product Page</h2>  
      <Link href="/">        
        <a className='link'>Back to products list</a>
      </Link>
    </>
  )
}
