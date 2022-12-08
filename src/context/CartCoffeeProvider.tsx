import { createContext, useContext, useState } from 'react'

interface selectedCoffee {
    coffeeId: string;
    quantity: number;
}

const [selectedCoffees, setSelectedCoffee] = useState<selectedCoffee[]>([]);

