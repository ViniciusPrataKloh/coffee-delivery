import { createContext, ReactNode, useState } from 'react';
import coffeeList from '../coffee.seed.json';

interface Coffee {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

interface selectedCoffee {
    coffee: Coffee;
    quantity: number;
}

interface CartCoffeeContextProviderProps {
    children: ReactNode;
}

interface ICartContext {
    coffees: Coffee[];
    selectedCoffees: selectedCoffee[];
    totalCoffeesInCart: number;
    handleSetSelectedCoffee: (coffeeId: string, quantity: number) => void;
    handleRemoveCoffeeToCart: (coffeeIdToRemove: string) => void;
}



export const CartContext = createContext({} as ICartContext);


export function CartCoffeeContextProvider({ children }: CartCoffeeContextProviderProps) {
    const [selectedCoffees, setSelectedCoffees] = useState<selectedCoffee[]>([]);
    // const [quantity, setQuantity] = useState(0);

    const coffees: Coffee[] = coffeeList.coffees;
    const totalCoffeesInCart = selectedCoffees.length;

    function handleSetSelectedCoffee(coffeeId: string, quantity: number) {
        const selectedCoffee: selectedCoffee = Object.assign({
            coffee: getSelectedCoffeeById(coffeeId),
            quantity
        });

        setSelectedCoffees(state => [...state, selectedCoffee]);
    }

    function handleRemoveCoffeeToCart(coffeeIdToRemove: string) {
        const newSelectedCoffees = selectedCoffees.filter(item => {
            return item.coffee.id !== coffeeIdToRemove;
        });

        setSelectedCoffees(newSelectedCoffees);
    }

    function getSelectedCoffeeById(coffeeId: string): Coffee | undefined {
        const coffee = coffees.find(coffee => coffee.id === coffeeId);
        return coffee;
    }


    console.log(selectedCoffees);
    return (
        <CartContext.Provider value={{
            coffees,
            selectedCoffees,
            totalCoffeesInCart,
            handleSetSelectedCoffee,
            handleRemoveCoffeeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}