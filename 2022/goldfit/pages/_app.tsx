import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
import "../components/Home/style.css"
function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>


    <Layout childcomponent={<Component {...pageProps} />} />
    {/* <ReactQueryDevtools position='bottom-left' initialIsOpen={false} /> */}
  </QueryClientProvider>
}

export default MyApp
