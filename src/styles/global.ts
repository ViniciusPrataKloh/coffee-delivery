import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
 }
  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']}; */
  }
  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['gray-700']};
    --webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
