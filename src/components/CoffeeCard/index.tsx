import { ShoppingCartSimple } from 'phosphor-react'
import coffee from '../../assets/coffee.png'
import { CardContainer } from './styles'


export function CoffeCard() {
    return (
        <CardContainer>
            <div>
                <div>
                    <img src={coffee} alt="" />
                    <div>
                        <span>TRADICIONAL</span>
                        <span>COM LEITE</span>
                    </div>

                    <div>
                        <strong>Expresso Tradicional</strong>
                        <span>O tradicional café feito com água quente e leite</span>
                    </div>

                    <div>
                        <span>R$<strong>9,90</strong></span>

                        <div>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>

                        <span>
                            <ShoppingCartSimple />
                        </span>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}