import { useState, useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress


export default function UseRouterStatus() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const start = () => {
      setIsLoading(true)
    };
    const complete = () => {
      setIsLoading(false)
      setIsError(false)
    };
    const error = error => {
      setIsLoading(false)
      setIsError(true)
      setError(error)
    };

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', complete)
    Router.events.on('routeChangeError', error)
    // Router.events.on('routeChangeStart', () => NProgress.start())
    // Router.events.on('routeChangeComplete', () => NProgress.done())
    // Router.events.on('routeChangeError', () => NProgress.done())


    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', complete)
      Router.events.off('routeChangeError', error)
    }
  }, [])

  return { isLoading, isError, error }
}

