import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { CartCoffeeContextProvider } from './context/CartCoffeeProvider'
import { FormLocationContextProvider } from './context/FormLocationContextProvider'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CartCoffeeContextProvider>
                    <FormLocationContextProvider>
                        <Router />
                    </FormLocationContextProvider>
                </CartCoffeeContextProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
