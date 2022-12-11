import styled from 'styled-components'

export const SelectedCoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 368px;
    height: 80px;
    padding: 4px 8px;
    gap: 12px;

    .coffee-image{
        width: 64px;
        height: 64px;
    }

    .container{
        display: flex;
        flex-direction: row;
        gap: 48px;
    }

    .left-card{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .buttons{
        display: flex;
        flex-direction: row;
        gap: 8px;

        .remove-button{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 6px 8px;
            border-radius: 6px;

            background-color: ${(props) => props.theme['gray-300']};
            color: ${(props) => props.theme['gray-700']};

            &:hover{
                background-color: ${(props) => props.theme['gray-400']};
            }

            img{
                color: ${(props) => props.theme['purple-300']};
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