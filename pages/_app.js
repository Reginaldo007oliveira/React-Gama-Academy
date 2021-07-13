import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AlurakutStyles } from "../src/lib/vibeKutCommons";
//globalStyle chama o css global
const GlobalStyle = createGlobalStyle`
/* Reset CSS */
*{
margin:0;
padding:0;
box-sizing:border-box;

}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #D9E6F6;
  }
  #__next{

    display: flex;
    min-height: 100vh;
    flex-direction: Column;
  }
  img{
    max-width: 30%;
    height: auto;
    display: block;
  }

  #{AlurakutStyles}
`;

const theme = {
  colors: {
    primary: "#007000",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
