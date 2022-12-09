import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext, useState } from 'react';
import coffee from '../../assets/arabe.png';
import { CartContext } from '../../context/CartCoffeeProvider';
import { Quantity } from '../CoffeeCard/styles';
import { SelectedCoffeeCardContainer } from './styled';

interface SelectedCoffeeCardProps {
    id: string;
    title: string;
    quantity: number;
    price: number;
}

export function SelectedCoffeeCard({ id, title, quantity, price }: SelectedCoffeeCardProps) {
    const [cartQuantity, setCartQuantity] = useState(quantity);

    const { handleRemoveCoffeeToCart } = useContext(CartContext);

    const priceAmount = price * quantity;

    function handleAddOneQuantity() {
        setCartQuantity(cartQuantity + 1);
    }

    function handleRemoveOneQuantity() {
        if (cartQuantity !== 0) {
            setCartQuantity(cartQuantity - 1);
        }
    }

    function onRemoveCoffee() {
        handleRemoveCoffeeToCart(id);
    }

    return (
        <SelectedCoffeeCardContainer>
            <img className='coffee-image' src={coffee} alt="" />
            <div className='container'>
                <div className='left-card'>
                    <span>{title}</span>
                    <div className='buttons'>
                        <Quantity>
                            <button><Minus size={12} onClick={handleRemoveOneQuantity} /></button>
                            <span>{cartQuantity}</span>
                            <button><Plus size={12} onClick={handleAddOneQuantity} /></button>
                        </Quantity>
                        <button className='remove-button' onClick={onRemoveCoffee}>
                            <Trash color='#8047F8' />
                            Remover
                        </button>
                    </div>
                </div>
                <span>R$ {priceAmount}</span>
            </div>
        </SelectedCoffeeCardContainer>
    )
}