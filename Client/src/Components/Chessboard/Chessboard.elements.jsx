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


