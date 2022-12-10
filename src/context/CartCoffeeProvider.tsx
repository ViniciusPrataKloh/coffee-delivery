import { createContext, ReactNode, useReducer, useState } from 'react';
import coffeeList from '../coffee.seed.json';
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
        dispatch({
            type: 'ADD_NEW_COFFEE',
            payload: {
                coffee: getSelectedCoffeeById(coffeeId),
                quantity
            }
        });
    }

    function removeCoffeeToCart(coffeeIdToRemove: string) {
        dispatch({
            type: 'REMOVE_COFFEE',
            payload: {
                coffee: getSelectedCoffeeById(coffeeIdToRemove),
            }
        });
    }

    function changeQuantityOfItem(coffeeId: string, quantity: number) {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                coffee: getSelectedCoffeeById(coffeeId),
                quantity
            }
        });
    }

    function getSelectedCoffeeById(coffeeId: string): Coffee | undefined {
        const coffee = coffees.find(coffee => coffee.id === coffeeId);
        return coffee;
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