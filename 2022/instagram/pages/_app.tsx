import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import useSWR, { SWRConfig } from 'swr'
import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }: AppProps) {

  return <ChakraProvider>

    <Layout childcomponent={<Component {...pageProps} />} />

    {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}


  </ChakraProvider>
}

export default MyApp
