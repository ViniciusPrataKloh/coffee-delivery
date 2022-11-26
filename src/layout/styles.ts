import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 70rem;
    height: calc(100vh - 10rem);
    margin: 0 auto;

    background-color: ${(props) => props.theme['backgound']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`
