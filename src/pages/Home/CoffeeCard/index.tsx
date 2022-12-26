import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartCoffeeProvider';
import { CoffeeImage } from '../CoffeeImage';
import { CardContainer, CartButton, CoffeeTitle, FooterContainer, FormCart, Header, Quantity, Tag, TagContainer } from './styles';

interface CoffeeCardProps {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

export function CoffeeCard({ id, title, subtitle, tags, price, imageUrl }: CoffeeCardProps) {

    const { insertItemToCart } = useContext(CartContext);

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
        insertItemToCart(id, quantity);
        setQuantity(0);
    }

    const isButtonDisabled = (quantity > 0) ? false : true;

    return (
        <CardContainer>
            <Header>
                <CoffeeImage type={title} />

                <TagContainer>
                    {tags.map(tag => {
                        return (
                            <Tag key={tag}>{tag}</Tag>
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

                    <CartButton disabled={isButtonDisabled} onClick={handleAddCoffeeToCart}>
                        <ShoppingCartSimple size={14} />
                    </CartButton>
                </FormCart>
            </FooterContainer>
        </CardContainer>
    )
}