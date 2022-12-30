import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { CartCoffeeContextProvider } from './context/CartCoffeeContextProvider'
import { FormLocationContextProvider } from './context/FormLocationContextProvider'
import { PaymentContextProvider } from './context/PaymentContextProvider'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CartCoffeeContextProvider>
                    <FormLocationContextProvider>
                        <PaymentContextProvider>
                            <Router />
                        </PaymentContextProvider>
                    </FormLocationContextProvider>
                </CartCoffeeContextProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
