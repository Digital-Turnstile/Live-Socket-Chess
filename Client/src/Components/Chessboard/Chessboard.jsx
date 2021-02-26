import React, { useState, useContext, useEffect } from 'react'
import DashboardBackground from '../../../public/images/DashboardBackground.svg'
import WorkingOut from '../../../public/images/WorkingOut.svg'
import Subutai from '../../../public/images/subutai.png'


import {
    BoardWrapper,
    BoardContainer,
    Board,
    Square
} from './Chessboard.elements'

export default function DashboardPage() {
    let board = new Array(64);
    board.fill(0);
    board.map((square, i) => {
        let piece = {color: (i + 1) % 2}

        if(Math.floor(i / 8) % 2) 
            piece = {color: (i + 0) % 2}

        board[i] =  piece;
    })



    return <>
        <BoardWrapper />
        <BoardContainer>
            <Board>
                {console.log(board)}
               {
                   board.map((piece, i) => {
                       return <Square key={i} light={piece.color}>{i}</Square>
                   })
               }
            </Board>
        </BoardContainer>
    </>
}