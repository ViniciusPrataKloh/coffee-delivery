import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5.875rem;
    margin-bottom: 1.875rem;
    gap: 3.5rem;
    margin: 5.875rem auto;

    h1{
        font-size: xx-large;
        font: bold;
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HeaderInfo = styled.header`
    display: flex;
    flex-direction: column;
`

export const MarketingList = styled.div`
    display:grid;
    grid-template-columns: 271px 271px;
    grid-row: auto auto;
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    margin-top: 4.125rem;
`
export const MarketingItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.75rem;
`

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 4;
    margin-top: 2rem;
    gap: 3.375rem;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 4;
`

const BACKGROUND_ICON_COLOR = {
    yellow: 'yellow-300',
    yellow_dark: 'yellow-500',
    gray: 'gray-700',
    purple: 'purple-300'

}

interface IconCircleProps {
    iconColor: 'yellow' | 'yellow_dark' | 'gray' | 'purple'
}

export const IconCircle = styled.span<IconCircleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 8px;
    border-radius: 50%;

    background-color: ${(props) => props.theme[BACKGROUND_ICON_COLOR[props.iconColor]]};
    color: ${(props) => props.theme['white']};
`