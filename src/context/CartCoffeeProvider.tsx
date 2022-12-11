import { createContext, ReactNode, useReducer, useState } from 'react';
import coffeeList from '../coffee.seed.json';
import { addNewCoffeeAction, changeCoffeeQuantityAction, removeCoffeeAction } from '../reducers/actions';
import { CartStateReducer } from '../reducers/reducer';

export interface Coffee {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

export interface selectedCoffee {
    coffee: Coffee;
    quantity: number;
}

interface CartCoffeeContextProviderProps {
    children: ReactNode;
}

interface ICartContext {
    cartState: selectedCoffee[];
    coffees: Coffee[];
    selectedCoffees: selectedCoffee[];
    totalCoffeesInCart: number;
    setSelectedCoffee: (coffeeId: string, quantity: number) => void;
    removeCoffeeToCart: (coffeeIdToRemove: string) => void;
    changeQuantityOfItem: (coffeeId: string, quantity: number) => void;
}

export const CartContext = createContext({} as ICartContext);

export function CartCoffeeContextProvider({ children }: CartCoffeeContextProviderProps) {
    const coffees: Coffee[] = coffeeList.coffees;

    const [cartState, dispatch] = useReducer(CartStateReducer, []);

    const [selectedCoffees, setSelectedCoffees] = useState<selectedCoffee[]>([]);
    // const [quantity, setQuantity] = useState(0);

    const totalCoffeesInCart = cartState.length;

    function setSelectedCoffee(coffeeId: string, quantity: number) {
        const coffee: Coffee = getSelectedCoffeeById(coffeeId);
        dispatch(addNewCoffeeAction(coffee, quantity))
    }

    function removeCoffeeToCart(coffeeIdToRemove: string) {
        dispatch(removeCoffeeAction(coffeeIdToRemove));
    }

    function changeQuantityOfItem(coffeeId: string, quantity: number) {
        const coffee: Coffee = getSelectedCoffeeById(coffeeId);
        dispatch(changeCoffeeQuantityAction(coffee, quantity))
    }

    function getSelectedCoffeeById(coffeeId: string): Coffee {
        const coffee = coffees.find(coffee => coffee.id === coffeeId);
        return coffee!;
    }

    console.log(cartState);

    return (
        <CartContext.Provider value={{
            cartState,
            coffees,
            selectedCoffees,
            totalCoffeesInCart,
            setSelectedCoffee,
            removeCoffeeToCart,
            changeQuantityOfItem
        }}>
            {children}
        </CartContext.Provider>
    )
}