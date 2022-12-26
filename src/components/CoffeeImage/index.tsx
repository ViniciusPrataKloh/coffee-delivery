import americano from '../../assets/americano.png';
import arabe from '../../assets/arabe.png';
import cafeComLeite from '../../assets/cafe-com-leite.png';
import cafeGelado from '../../assets/cafe-gelado.png';
import capuccino from '../../assets/capuccino.png';
import chocolateQuente from '../../assets/chocolate-quente.png';
import cubano from '../../assets/cubano.png';
import expressoCremoso from '../../assets/expresso-cremoso.png';
import expresso from '../../assets/expresso.png';
import havaiano from '../../assets/havaiano.png';
import irlandes from '../../assets/irlandes.png';
import latte from '../../assets/latte.png';
import macchiato from '../../assets/macchiato.png';
import mochaccino from '../../assets/mochaccino.png';

interface CoffeeImageProps {
    type: string;
}

export function CoffeeImage({ type }: CoffeeImageProps) {
    switch (type) {
        case 'coffee1':
            return (
                <img src={expresso} alt="" />
            );
        case 'coffee2':
            return (
                <img src={americano} alt="" />
            );
        case 'coffee3':
            return (
                <img src={expressoCremoso} alt="" />
            );
        case 'coffee4':
            return (
                <img src={cafeGelado} alt="" />
            );
        case 'coffee5':
            return (
                <img src={cafeComLeite} alt="" />
            );
        case 'coffee6':
            return (
                <img src={latte} alt="" />
            );
        case 'coffee7':
            return (
                <img src={capuccino} alt="" />
            );
        case 'coffee8':
            return (
                <img src={macchiato} alt="" />
            );
        case 'coffee9':
            return (
                <img src={mochaccino} alt="" />
            );
        case 'coffee10':
            return (
                <img src={chocolateQuente} alt="" />
            );
        case 'coffee11':
            return (
                <img src={cubano} alt="" />
            );
        case 'coffee12':
            return (
                <img src={havaiano} alt="" />
            );
        case 'coffee13':
            return (
                <img src={arabe} alt="" />
            );
        case 'coffee14':
            return (
                <img src={irlandes} alt="" />
            );
        default:
            return (
                <img src={expresso} alt="" />
            );
    }
}