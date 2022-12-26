import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { CartContext } from '../../context/CartCoffeeProvider';
import { FormContext } from '../../context/FormLocationContextProvider';
import { CartContainer, Counter, HeaderContainer, LocationContainer } from './styles';

export function Header() {
    const { totalCoffeesInCart } = useContext(CartContext);
    const { city, fu } = useContext(FormContext);

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo do Coffee Delivery" />

            <nav>
                <LocationContainer>
                    <MapPin size={24} />
                    <span>{city}, {fu}</span>
                </LocationContainer>

                <CartContainer>
                    <NavLink to="/checkout" title="Carrinho">
                        <ShoppingCart size={24} />
                    </NavLink>
                </CartContainer>
                <Counter>{totalCoffeesInCart}</Counter>
            </nav>

        </HeaderContainer>
    )
}