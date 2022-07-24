import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout childcomponent={<Component {...pageProps} />} />
}

export default MyApp
