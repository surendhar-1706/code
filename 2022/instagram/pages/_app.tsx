import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }: AppProps) {
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
      },
    },
  });
  return <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Layout childcomponent={<Component {...pageProps} />} />

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>

  </ChakraProvider>
}

export default MyApp
