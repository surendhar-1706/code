import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout childcomponent={<Component {...pageProps} />} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  )
}

export default MyApp
