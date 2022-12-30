import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 256px;

    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;

    background-color: ${(props) => props.theme['gray-100']};

    img{
        margin-top: -20px;
        margin-bottom: 16px;

    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

export const Tag = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 100px;
    
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-500']};

    font-size: small;
`

export const CoffeeTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 20px;
`
export const FormCart = styled.div`
    display: flex;
    flex: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    button{
        border: none!important;
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
    transition: .2s;

    button{
        color: ${(props) => props.theme['purple-300']};
        background-color: ${(props) => props.theme['gray-300']};
    
        &:hover{
            color: ${(props) => props.theme['gray-500']};
        }
     }
`

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 8px;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['white']};
    transition: .2s;

    &:hover{
        background: ${(props) => props.theme['purple-300']};
    }
`