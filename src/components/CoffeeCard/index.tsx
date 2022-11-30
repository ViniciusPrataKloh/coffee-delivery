import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import coffee from '../../assets/coffee.png'
import { CardContainer, CartButton, CoffeeTitle, FooterContainer, FormCart, Header, Quantity, Tag, TagContainer } from './styles'


export function CoffeeCard() {
    return (
        <CardContainer>
            <Header>
                <img src={coffee} alt="" />
                <TagContainer>
                    <Tag>TRADICIONAL</Tag>
                    <Tag>COM LEITE</Tag>
                </TagContainer>
            </Header>


            <CoffeeTitle>
                <strong>Expresso Tradicional</strong>
                <span>O tradicional café feito <br />com água quente e leite</span>
            </CoffeeTitle>

            <FooterContainer>
                <span>R$ <strong>9,90</strong></span>

                <FormCart>
                    <Quantity>
                        <button><Minus size={12} /></button>
                        <span>1</span>
                        <button><Plus size={12} /></button>
                    </Quantity>

                    <CartButton type='submit'>
                        <ShoppingCartSimple size={14} />
                    </CartButton>
                </FormCart>
            </FooterContainer>
        </CardContainer>
    )
}