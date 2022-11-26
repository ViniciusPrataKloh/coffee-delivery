import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo do Coffee Delivery" />

            <nav>
                <LocationContainer>
                    <MapPin size={24} />
                    <span>Porto Alegre, RS</span>
                </LocationContainer>

                <CartContainer>
                    <NavLink to="/checkout" title="Carrinho">
                        <ShoppingCart size={24} />
                    </NavLink>
                </CartContainer>
            </nav>

        </HeaderContainer>
    )
}