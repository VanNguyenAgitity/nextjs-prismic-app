import * as React from 'react'
import { AppProps } from 'next/app'
import '../assets/styles/globals.scss'
import '../assets/styles/custom-slide.scss'
import '../assets/styles/custom-pagination.scss'
import '../assets/styles/custom-range.scss'
import UseRouterStatus from '../components/status-loading'

// export default class MyApp extends React.Component<AppProps> {
//   render() {
//     return (
//       <div className='root-app'>
//         <Head>
//           <title>Next App</title>
//           <link rel='icon' href='/favicon.ico'/>
//         </Head>
//         <Header />
//         <this.props.Component {...this.props.pageProps}  />
//       </div>
//     )
//   }
// }

const Mobility: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { isLoading } = UseRouterStatus()
  const visibleStyle = {
    display: '',
    transition: 'display 3s',
  };
  const inVisibleStyle = {
    display: 'none',
    transition: 'display 3s',
  };
  return (
    <>
      <span style={isLoading ? visibleStyle : inVisibleStyle}>
        Loading
      </span>
      <div style={isLoading ? inVisibleStyle : visibleStyle}>
        <Component {...pageProps} />
      </div>
    </>
    
  )
}

export default Mobility