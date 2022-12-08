import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CardContainer, CartButton, CoffeeTitle, FooterContainer, FormCart, Header, Quantity, Tag, TagContainer } from './styles'

import americano from '../../assets/americano.png'
import arabe from '../../assets/arabe.png'
import cafe_com_leite from '../../assets/cafe-com-leite.png'
import cafe_gelado from '../../assets/cafe-gelado.png'
import capuccino from '../../assets/capuccino.png'
import chocolate_quente from '../../assets/chocolate-quente.png'
import cubano from '../../assets/cubano.png'
import expresso_cremoso from '../../assets/expresso-cremoso.png'
import expresso from '../../assets/expresso.png'
import havaiano from '../../assets/havaiano.png'
import irlandes from '../../assets/irlandes.png'
import latte from '../../assets/latte.png'
import macchiato from '../../assets/macchiato.png'
import mochaccino from '../../assets/mochaccino.png'

interface CoffeeCardProps {
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

enum CoffeeImage {

}

export function CoffeeCard({ title, subtitle, tags, price, imageUrl }: CoffeeCardProps) {
    return (
        <CardContainer>
            <Header>
                <img src={americano} alt="" />
                <TagContainer>
                    {tags.map(tag => {
                        return (
                            <Tag>{tag}</Tag>
                        )
                    })}
                </TagContainer>
            </Header>


            <CoffeeTitle>
                <strong>{title}</strong>
                <span>{subtitle}</span>
            </CoffeeTitle>

            <FooterContainer>
                <span>R$ <strong>{price / 100}</strong></span>

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