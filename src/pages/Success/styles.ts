import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 102px;

    img{
        margin-top: 180px;
    }
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    h2{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        color: ${(props) => props.theme['yellow-500']};
    }

    .subtitle{
        margin-top: 4px;
        margin-bottom: 40px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
        color: ${(props) => props.theme['gray-800']};
    }
`

export const Box = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 92px;
`

export const GradientBorder = styled.div`
    border-radius: 6px 36px;
    border: 2px solid transparent;
    -webkit-mask:
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;

    background: linear-gradient(160deg, #DBAC2C, #4B2995) border-box;

    position: relative;
    z-index: 50;
    top: 0;
    right: 0;
    width: 526px;
    height: 270px;
`

export const InformationCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;

    div{
        display: flex;
        flex-direction: column;
    }
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