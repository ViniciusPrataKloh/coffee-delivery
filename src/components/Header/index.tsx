import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { CartContext } from '../../context/CartCoffeeContextProvider';
import { FormContext } from '../../context/FormLocationContextProvider';
import { CartContainer, Counter, HeaderContainer, LocationContainer } from './styles';

export function Header() {
    const { totalCoffeesInCart } = useContext(CartContext);
    const { city, fu } = useContext(FormContext);
    console.log(city)

    const isLocationEmpty = (city === '' || fu === '') ? true : false;

    return (
        <HeaderContainer>
            <NavLink to="/" title="Voltar à página inicial">
                <img src={logo} alt="Logo do Coffee Delivery" />
            </NavLink>

            <nav>

                {
                    !isLocationEmpty
                        ? <LocationContainer>
                            <MapPin size={24} />
                            <span>{city}, {fu}</span>
                        </LocationContainer>
                        : <></>
                }

                <CartContainer>
                    <NavLink to="/checkout" title="Ir para o arrinho">
                        <ShoppingCart size={24} />
                    </NavLink>
                </CartContainer>
                <Counter>{totalCoffeesInCart}</Counter>
            </nav>

        </HeaderContainer>
    )
}