import { CurrencyDollar, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { PaymentTypeCard } from '../../components/PaymentTypeCard'
import { SelectedCoffeeCard } from '../../components/SelectedCoffeeCard'
import { CartContext } from '../../context/CartCoffeeProvider'
import { CheckoutContainer, LocationCard, PaymentCard, RightCard } from './styles'

export function Checkout() {
    const { selectedCoffees } = useContext(CartContext);

    let priceAmount = selectedCoffees.map(item => {
        return item.coffee.price * item.quantity;
    });

    function getPriceAmount() {

    }

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

                    <form>
                        <input type="text" name="input-pac" id="input-pac" placeholder="CEP" />
                        <input type="text" name="input-road" id="input-road" placeholder="Rua" />
                        <div>
                            <input type="text" name="input-number" id="input-number" placeholder="Número" />
                            <input type="text" name="input-complement" id="input-complement" placeholder="Complemento" />
                            {/* <input type="text" name="input-optional" id="input-optional" placeholder="Opcional" /> */}
                        </div>
                        <div>
                            <input type="text" name="input-district" id="input-district" placeholder="Bairro" />
                            <input type="text" name="input-city" id="input-city" placeholder="Cidade" />
                            <input type="text" name="input-fu" id="input-fu" placeholder="UF" />
                        </div>
                    </form>
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
                    {selectedCoffees.map((item) => {
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
                            <span>R$ {priceAmount}</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ 3.50</span>
                        </div>
                        <div>
                            <strong>Total</strong>
                            <strong>R$ 13,40</strong>
                        </div>

                        <button>Confirmar</button>
                    </div>
                </RightCard>
            </div>
        </CheckoutContainer >

    )
}