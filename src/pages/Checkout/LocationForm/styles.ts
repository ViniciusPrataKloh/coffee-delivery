import styled from 'styled-components'

export const Form = styled.form`
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

        input[name="pac"]{
            width: 200px;
        }

        input[name="number"]{
            width: 200px;
        }

        input[name="complement"]{
            width: 348px;
            margin-left: 12px;
        }

        div:fist-child{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        input[name="district"]{
            width: 200px;
        }

        input[name="city"]{
            width: 276px;
            margin-left: 12px;
            margin-right: 12px;
        }

        input[name="fu"]{
            width: 60px;
        } 

        div:last-child{
            display: flex;
            flex-direction: row;
        }
`