import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import coffeeDelivery from '../../assets/coffee-delivery.png'
import { CartContext } from '../../context/CartCoffeeProvider'
import { CoffeeCard } from './CoffeeCard'
import {
    CardContainer, Header, HeaderContainer, IconCircle,
    MainContainer, MarketingItem, MarketingList
} from './styles'


export function Home() {
    const { coffees } = useContext(CartContext);

    return (
        <>
            <HeaderContainer>
                <Header>
                    <div>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </span>
                    </div>

                    <MarketingList>
                        <MarketingItem>
                            <IconCircle iconColor='yellow'>
                                <ShoppingCart />
                            </IconCircle>
                            <span>Compra simples e segura</span>
                        </MarketingItem>
                        <MarketingItem>
                            <IconCircle iconColor='gray'>
                                <Timer />
                            </IconCircle>
                            <span>Entrega rápida e rstreada</span>
                        </MarketingItem>
                        <MarketingItem>
                            <IconCircle iconColor='yellow_dark'>
                                <Package />
                            </IconCircle>
                            <span>Embalagem mantém o café intacto</span>
                        </MarketingItem>
                        <MarketingItem>
                            <IconCircle iconColor='purple'>
                                <Coffee />
                            </IconCircle>
                            <span>O café chega fresquinho até você</span>
                        </MarketingItem>
                    </MarketingList>
                </Header>

                <img src={coffeeDelivery} alt='Imagem do Coffe Delivery' />
            </HeaderContainer>

            <MainContainer>
                <h2>
                    Nossos cafés
                </h2>

                <CardContainer>
                    {coffees.map(coffee => {
                        return (
                            <CoffeeCard key={coffee.id}
                                id={coffee.id}
                                title={coffee.title}
                                subtitle={coffee.subtitle}
                                tags={coffee.tags}
                                price={coffee.price}
                                imageUrl={coffee.imageUrl}
                            />
                        )
                    })}
                </CardContainer>
            </MainContainer>

        </>

    )
}