

interface Coffee {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

interface ICartItem {
    coffees: Coffee[];
    quantity: number;
}

export function CartStateReducer() {

}