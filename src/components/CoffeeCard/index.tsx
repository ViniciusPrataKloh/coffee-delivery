import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CardContainer, CartButton, CoffeeTitle, FooterContainer, FormCart, Header, Quantity, Tag, TagContainer } from './styles'

import { useContext, useState } from 'react'
import macchiato from '../../assets/macchiato.png'
import { CartContext } from '../../context/CartCoffeeProvider'

interface CoffeeCardProps {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

export function CoffeeCard({ id, title, subtitle, tags, price, imageUrl }: CoffeeCardProps) {

    const { selectedCoffees, handleSetSelectedCoffee } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    function handleAddOneQuantity() {
        setQuantity(quantity + 1);
    }

    function handleRemoveOneQuantity() {
        if (quantity !== 0) {
            setQuantity(quantity - 1);
        }
    }

    function handleAddCoffeeToCart() {
        handleSetSelectedCoffee(id, quantity);
    }

    return (
        <CardContainer>
            <Header>
                <img src={macchiato} alt="" />
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
                <span>R$ <strong>{price}</strong></span>

                <FormCart>
                    <Quantity>
                        <button><Minus size={12} onClick={handleRemoveOneQuantity} /></button>
                        <span>{quantity}</span>
                        <button><Plus size={12} onClick={handleAddOneQuantity} /></button>
                    </Quantity>

                    <CartButton onClick={handleAddCoffeeToCart}>
                        <ShoppingCartSimple size={14} />
                    </CartButton>
                </FormCart>
            </FooterContainer>
        </CardContainer>
    )
}