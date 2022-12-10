import { createContext, ReactNode, useReducer, useState } from 'react';
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

    const [cartState, dispatch] = useReducer((state: selectedCoffee[], action: any) => {
        if (action.type == 'ADD_NEW_COFFEE') {
            const selectedCoffee: selectedCoffee = Object.assign({
                coffee: getSelectedCoffeeById(action.payload.coffeeId),
                quantity: action.payload.quantity
            });
            return [...state, selectedCoffee];
        }

        if (action.type === 'REMOVE_COFFEE') {
            const newState = state.filter(item => {
                return item.coffee.id !== action.payload.coffeeId;
            });

            return newState;
        }

        if (action.type === 'CHANGE_QUANTITY') {
            return state.map(item => {
                if (item.coffee.id === action.payload.coffeeId) {
                    const updateCoffee: selectedCoffee = Object.assign({
                        coffee: getSelectedCoffeeById(action.payload.coffeeId),
                        quantity: action.payload.quantity
                    });
                    console.log(updateCoffee)
                    return updateCoffee;
                } else {
                    return item;
                }
            });
        }

        return state;
    }, []);

    const [selectedCoffees, setSelectedCoffees] = useState<selectedCoffee[]>([]);
    // const [quantity, setQuantity] = useState(0);

    const totalCoffeesInCart = cartState.length;

    function setSelectedCoffee(coffeeId: string, quantity: number) {
        dispatch({
            type: 'ADD_NEW_COFFEE',
            payload: {
                coffeeId,
                quantity
            }
        });
    }

    function removeCoffeeToCart(coffeeIdToRemove: string) {
        dispatch({
            type: 'REMOVE_COFFEE',
            payload: {
                coffeeId: coffeeIdToRemove
            }
        });
    }

    function changeQuantityOfItem(coffeeId: string, quantity: number) {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                coffeeId,
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