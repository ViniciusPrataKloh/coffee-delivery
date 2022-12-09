import { createContext, ReactNode, useState } from 'react';

interface selectedCoffee {
    coffeeId: string;
    quantity: number;
}

interface CartCoffeeContextProviderProps {
    children: ReactNode;
}

interface ICartContext {
    selectedCoffees: selectedCoffee[];
    handleSetSelectedCoffee: (coffeeId: string, quantity: number) => void;
}

export const CartContext = createContext({} as ICartContext);


export function CartCoffeeContextProvider({ children }: CartCoffeeContextProviderProps) {
    const [selectedCoffees, setSelectedCoffee] = useState<selectedCoffee[]>([]);

    function handleSetSelectedCoffee(coffeeId: string, quantity: number) {
        const selectedCoffee: selectedCoffee = Object.assign({
            coffeeId,
            quantity
        });

        setSelectedCoffee(state => [...state, selectedCoffee]);
    }

    console.log(selectedCoffees);
    return (
        <CartContext.Provider value={{
            selectedCoffees,
            handleSetSelectedCoffee
        }}>
            {children}
        </CartContext.Provider>
    )
}