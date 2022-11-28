import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    /* margin: 0 auto; */

    nav{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.625rem 0.5rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-500']};
`

export const CartContainer = styled.button`
    display: flex;
    align-items: center;
    padding: 0.625rem 0.625rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['yellow-100']};

    button::hover{
        background: ${(props) => props.theme['yellow-300']};
    }
    
    a{
        color: ${(props) => props.theme['yellow-500']}
    }
`

export const Counter = styled.span`
    border-radius: 100%;
    padding: 4px 8px;

    margin-left: -26px;
    margin-top: -48px;

    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['yellow-100']};
`