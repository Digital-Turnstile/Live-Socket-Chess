import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle, { Theme } from '../src/globalStyles'
import { ChessProvider } from '../src/Contexts/ChessContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ChessProvider>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChessProvider>
    </>
  )
}
