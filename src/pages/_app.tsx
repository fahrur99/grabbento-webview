import 'antd/dist/antd.css'
import 'styles/globals.scss'
import 'styles/override.scss'
import type { AppProps } from 'next/app'
import BasketProvider from 'hooks/basket/provider'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BasketProvider>
      <Component {...pageProps} />
    </BasketProvider>
  )
}

export default App
