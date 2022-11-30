import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 40px;
`

export const BaseLeftCard = styled.div`
    width: 640px;
    margin-top: 16px;
    padding: 40px 40px;
    background-color: ${(props) => props.theme['gray-100']};
`

export const LocationCard = styled(BaseLeftCard)`
    display: flex;
    flex-direction: column;
    gap: 32px;

    header{
        display: flex;
        flex-direction: row;
        gap: 8px;

        div{
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
    }

`

export const PaymentCard = styled(BaseLeftCard)`
    display: flex;
    flex-direction: column;

    margin-top: 12px;
`

export const RightCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    width: 448px;
    margin-top: 16px;
    padding: 40px 40px;
    background-color: ${(props) => props.theme['gray-100']};
`


export const Quantity = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 8px;
gap: 8px;
padding: 8px 12px;

background-color: ${(props) => props.theme['gray-300']};

button{
    color: ${(props) => props.theme['purple-300']};
    background-color: ${(props) => props.theme['gray-300']};

    &::hover{
        color: ${(props) => props.theme['purple-500']};
    }
}
`