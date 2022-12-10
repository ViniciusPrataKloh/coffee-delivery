import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
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
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const { changeQuantityOfItem, removeCoffeeToCart } = useContext(CartContext);

    function handleAddOneQuantity() {
        setItemQuantity(itemQuantity + 1);
    }

    function handleRemoveOneQuantity() {
        if (itemQuantity !== 1) {
            setItemQuantity(itemQuantity - 1);
        }
    }

    function handleRemoveCoffee() {
        removeCoffeeToCart(id);
    }

    useEffect(() => {
        changeQuantityOfItem(id, itemQuantity);
    }, [itemQuantity]);

    const priceAmount = itemQuantity * price;

    return (
        <SelectedCoffeeCardContainer>
            <img className='coffee-image' src={coffee} alt="" />
            <div className='container'>
                <div className='left-card'>
                    <span>{title}</span>
                    <div className='buttons'>
                        <Quantity>
                            <button><Minus size={12} onClick={handleRemoveOneQuantity} /></button>
                            <span>{itemQuantity}</span>
                            <button><Plus size={12} onClick={handleAddOneQuantity} /></button>
                        </Quantity>
                        <button className='remove-button' onClick={handleRemoveCoffee}>
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