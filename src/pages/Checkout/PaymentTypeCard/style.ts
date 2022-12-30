import styled from 'styled-components'

export const TypeCardButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 18px;
    width: 178px;
    border-radius: 6px;

    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-700']};
    font-size: 12px;

    &:hover{
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-800']};
    }

    &:focus{
        background-color: ${(props) => props.theme['purple-100']};
        border: 2px solid ${(props) => props.theme['purple-300']};
    }
`