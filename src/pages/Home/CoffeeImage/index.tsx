import expresso from '../../../assets/expresso.png';
import latte from '../../../assets/latte.png';
import macchiato from '../../../assets/macchiato.png';

interface CoffeeImageProps {
    // type: 'macchiato' | 'tradicional';
    type: string;
}

export function CoffeeImage({ type }: CoffeeImageProps) {
    switch (type) {
        case 'Macchiato':
            return (
                <img src={macchiato} alt="" />
            );
        case 'Latte':
            return (
                <img src={latte} alt="" />
            );
        default:
            return (
                <img src={expresso} alt="" />
            );
    }
}