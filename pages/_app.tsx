import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import WalletContextProvider from '../components/WalletContextProvider'

import { extendTheme } from "@chakra-ui/react"

const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
//these Wraps are something that I wanto to understand, specially in comparison to my flutter knowledge


  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
		<Component {...pageProps} />
	</WalletContextProvider>

    </ChakraProvider>
  )
}

export default MyApp