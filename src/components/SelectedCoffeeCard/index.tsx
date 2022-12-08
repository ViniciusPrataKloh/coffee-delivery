import { Minus, Plus, Trash } from 'phosphor-react';
import coffee from '../../assets/arabe.png';
import { Quantity } from '../CoffeeCard/styles';
import { SelectedCoffeeCardContainer } from './styled';

export function SelectedCoffeeCard() {
    return (
        <SelectedCoffeeCardContainer>
            <img className='coffee-image' src={coffee} alt="" />
            <div className='container'>
                <div className='left-card'>
                    <span>Expresso Tradicional</span>
                    <div className='buttons'>
                        <Quantity>
                            <button><Minus size={12} /></button>
                            <span>1</span>
                            <button><Plus size={12} /></button>
                        </Quantity>
                        <button className='remove-button'>
                            <Trash color='#8047F8' />
                            Remover
                        </button>
                    </div>
                </div>
                <span>R$ 9,90</span>
            </div>
        </SelectedCoffeeCardContainer>
    )
}