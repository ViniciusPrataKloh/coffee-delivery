import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import illustration from '../../assets/illustration.png'
import { CartContext } from '../../context/CartCoffeeContextProvider'
import { FormContext } from '../../context/FormLocationContextProvider'
import { PaymentContext } from '../../context/PaymentContextProvider'
import { Box, GradientBorder, IconCircle, InformationCard, InformationContainer, Item, Wrapper } from './styles'

export function Success() {
    const { location, number } = useContext(FormContext);
    const { clearCart } = useContext(CartContext);
    const { paymentType } = useContext(PaymentContext);

    // clearCart();

    return (
        <Wrapper>
            <InformationContainer>
                <h2>
                    Uhu! Pedido confirmado
                </h2>
                <span className='subtitle'>
                    Agora é só aguardar que logo o café chegará até você
                </span>

                <Box>
                    <GradientBorder>

                    </GradientBorder>
                    <InformationCard>
                        <Item>
                            <IconCircle iconColor='purple'>
                                <MapPin />
                            </IconCircle>
                            <div>
                                <span>Entrega em <strong>{location.road}, {number}</strong></span>
                                <span>{location.district} - {location.city}, {location.fu}</span>
                            </div>
                        </Item>
                        <Item>
                            <IconCircle iconColor='yellow'>
                                <Timer />
                            </IconCircle>
                            <div>
                                <span>Previsão de entrega</span>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </Item>
                        <Item>
                            <IconCircle iconColor='yellow_dark'>
                                <CurrencyDollar />
                            </IconCircle>
                            <div>
                                <span>Pagamento na entrega</span>
                                <strong>{paymentType}</strong>
                            </div>
                        </Item>
                    </InformationCard>
                </Box>

            </InformationContainer>

            <img src={illustration} alt="Entregador de moto" />
        </Wrapper>
    )
}