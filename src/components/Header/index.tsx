import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CartContainer, Counter, HeaderContainer, LocationContainer } from './styles'

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
                <Counter>0</Counter>
            </nav>

        </HeaderContainer>
    )
}