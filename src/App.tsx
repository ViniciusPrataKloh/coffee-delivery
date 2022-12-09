import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { CartCoffeeContextProvider } from './context/CartCoffeeProvider'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CartCoffeeContextProvider>
                    <Router />
                </CartCoffeeContextProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
