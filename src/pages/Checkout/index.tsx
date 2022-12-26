import { CurrencyDollar, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartCoffeeProvider'
import { formatPrice } from '../../utils/formatPrice'
import { LocationForm } from './LocationForm'
import { PaymentTypeCard } from './PaymentTypeCard'
import { SelectedCoffeeCard } from './SelectedCoffeeCard'
import { CheckoutContainer, LocationCard, PaymentCard, RightCard } from './styles'

export function Checkout() {
    const { cartItemsState } = useContext(CartContext);

    const deliveryFee = 350;
    const priceAmount = getPriceAmount();
    const totalAmount = priceAmount + deliveryFee;

    function getPriceAmount(): number {
        let priceAmount = 0;
        cartItemsState.forEach(item => {
            priceAmount += (item.coffee.price * item.quantity);
        });

        return priceAmount;
    }

    const formattedPriceAmount = formatPrice(priceAmount / 100);
    const formattedTotalAmount = formatPrice(totalAmount / 100);

    return (
        <CheckoutContainer>
            <div>
                <h3>Complete seu pedido</h3>

                <LocationCard>
                    <header>
                        <MapPin size={22} color='#DBAC2C' />
                        <div>
                            <span>Endereço de Entrega</span>
                            <span>Informe o endereço onde deseja receber o pedido</span>
                        </div>
                    </header>

                    <LocationForm />
                </LocationCard>

                <PaymentCard>
                    <header>
                        <CurrencyDollar size={22} color='#8047F8' />
                        <div>
                            <span>Pagamento</span>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
                        </div>
                    </header>

                    <div className="paymentMethod">
                        <PaymentTypeCard iconType='credit-card' name='Cartão de Crédito' />
                        <PaymentTypeCard iconType='bank' name='Cartão de Débito' />
                        <PaymentTypeCard iconType='money' name='Dinheiro' />
                    </div>
                </PaymentCard>
            </div>

            <div>
                <h3>Cafés Selecionados</h3>

                <RightCard>
                    {cartItemsState.map((item) => {
                        return (
                            <SelectedCoffeeCard
                                key={item.coffee.id}
                                id={item.coffee.id}
                                title={item.coffee.title}
                                quantity={item.quantity}
                                price={item.coffee.price}
                            />
                        )
                    })}

                    <div className='total'>
                        <div>
                            <span>Total de ítens</span>
                            <span>R$ {formattedPriceAmount}</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ 3.50</span>
                        </div>
                        <div>
                            <strong>Total</strong>
                            <strong>R$ {formattedTotalAmount}</strong>
                        </div>

                        <NavLink to="/success">
                            <button>Confirmar</button>
                        </NavLink>
                    </div>
                </RightCard>
            </div>
        </CheckoutContainer >

    )
}