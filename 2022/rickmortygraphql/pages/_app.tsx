
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import client from '../client/apolloclient'
function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider resetCSS={true}>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </ChakraProvider>
}

export default MyApp
