import React, { useState, useContext, useEffect } from 'react'
import ChessContext from '../../Contexts/ChessContext'


import {
    BoardWrapper,
    BoardContainer,
    Board,
    Square,
    Piece
} from './Chessboard.elements'

export default function DashboardPage() {
    const { board, turn, highlight, select, move } = useContext(ChessContext);

    //coordinate what happens when you click on a piece
    const handleClick = index => {
        //if a piece is already highlighted, and a user clicks it again,  
        if (index == highlight) {
            select(-1);
        } else {
            if(highlight != -1){
                move(index)
                select(-1)
            } else {
                select(index)
            }
        }
    }


    function ChessPiece(piece, highlight, i){
        let color = piece.piece.color.substring(0, 1);
        let name = piece.piece.piece.substring(0, 1)
        //dynamically import all chess pieces
        return <Piece light={piece.color == 'light'} highlight={i == highlight} src={`./images/ChessPieces/45px-Chess_${name}${color}t45.svg.png`} />
    }


    return <>
        <BoardWrapper />
        <BoardContainer>
            <Board>
                {
                    board?.map((piece, i) => {
                        return <Square key={i} light={piece.tile} onClick={() => handleClick(i)} highlight={highlight == i}>
                            {piece.piece == 'none'
                                ? null
                                : <ChessPiece piece={piece} highlight={highlight} i={i}/>
                            }
                        </Square>
                    })
                }
            </Board>
            {/* <p>selected: {board[selected]?.rank + " " + board[selected]?.file}</p> */}
        </BoardContainer>
    </>
}