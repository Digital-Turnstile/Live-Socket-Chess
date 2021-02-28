import { urlencoded } from 'body-parser';
import styled from 'styled-components';
import { Theme, Button } from '../../globalStyles'

export const BoardWrapper = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100vh;
    z-index: 0;
`


export const BoardContainer = styled.div`
    position: fixed;
    top: 10vh;
    width: 100%;
    height: 90vh;
    padding: 2%;
    background-color: ${Theme.purple};
`

export const Board = styled.div`
    width: 700px;
    height: 700px;
    border-radius: 50px;
    background-color:  ${Theme.darkPurple + 29};
    box-shadow: 5px 5px 10px 0px  ${Theme.darkPurple + 99};
    padding: 20px;
    display: grid;
    grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
    grid-template-rows:  12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
`

export const Square = styled.div`
    background-color: ${({ light }) => light ? Theme.purple : Theme.darkPurple};
    padding: 6px;
    border-style: solid;
    border-width: 2px;
    border-color: ${({ highlight }) => highlight ? `white` :  `transparent`};  
`

export const Piece = styled.img`
    width: 100%;
    height: 100%;
    padding: 0px;
`