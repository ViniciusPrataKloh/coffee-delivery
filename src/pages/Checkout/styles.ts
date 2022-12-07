import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 40px;

    h3{
        color: ${(props) => props.theme['yellow-dark']};
    }
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

    form{
        display: flex;
        flex-direction: column;
        gap: 16px;

        input{
            padding: 12px 12px;
            background-color: ${(props) => props.theme['gray-200']};
            color: ${(props) => props.theme['gray-700']};
            border-radius: 6px;

            &:focus{
                border: 1px solid ${(props) => props.theme['yellow-300']};
            }
        }

        input::placeholder{
            color: ${(props) => props.theme['gray-600']};
        }

        input[name="input-pac"]{
            width: 200px;
        }

        input[name="input-number"]{
            width: 200px;
        }

        input[name="input-complement"]{
            width: 348px;
            margin-left: 12px;
        }

        div:fist-child{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        input[name="input-district"]{
            width: 200px;
        }

        input[name="input-city"]{
            width: 276px;
            margin-left: 12px;
            margin-right: 12px;
        }

        input[name="input-fu"]{
            width: 60px;
        } 

        div:last-child{
            display: flex;
            flex-direction: row;
        }
    }
`

export const PaymentCard = styled(BaseLeftCard)`
    display: flex;
    flex-direction: column;
    margin-top: 12px;

    header{
        display: flex;
        flex-direction: row;
        gap: 8px;

        img{
            color: ${(props) => props.theme['purple-300']};
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
    }

    .paymentMethod{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        gap: 12px;
    }
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

    .total{
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 368px;

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        span{
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
        }

        strong{
            font-weight: bold;
            font-size: 20px;
            line-height: 130%;
        }

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 24px;
            padding: 12px 117px;
            border-radius: 6px;

            background-color: ${(props) => props.theme['yellow-300']};
            color:${(props) => props.theme['gray-100']};

            &:hover{
                background-color: ${(props) => props.theme['yellow-500']};
            }
        }
    }
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