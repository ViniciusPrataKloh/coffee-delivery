import { Minus, Plus } from 'phosphor-react';
import coffee from '../../assets/coffee.png';
import { Quantity } from '../CoffeeCard/styles';

export function SelectedCoffeeCard() {
    return (
        <div>
            <img src={coffee} alt="" />
            <div>
                <div>
                    <span>Expresso Tradicional</span>
                    <span>R$ 9,90</span>
                </div>
                <Quantity>
                    <button><Minus size={12} /></button>
                    <span>1</span>
                    <button><Plus size={12} /></button>
                </Quantity>
            </div>
        </div>
    )
}