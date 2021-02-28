import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'
import StartGameService from '../Services/StartGameService'

//Socket.io styuff
import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.0.109:5000');
socket.on('connection', () => {
    console.log('successfully connected to server')
})

//Init React context
const ChessContext = React.createContext();

export const ChessProvider = props => {
    const [board, setBoard] = useState([]);
    const [turn, setTurn] = useState(0);
    const [highlight, setHighlight] = useState(-1);
    const [color, setColor] = useState('white');

    /* let square = {
            tile: (i + 1) % 2, // black or white tile
            piece: 'none', // [pawn, queen, king, rook, bishop, knight, none]
            color: 'none', // who it belongs to
            file: (i % 8) + 1, //up and down [columns]
            rank: 8 - Math.floor(i / 8), //left and right [rows]
            highlight: false //is it selected by the user (should it be highlighted)?
        }
    */


    //Whenever you load the page
    useEffect(() => {
        //make an array of 64 and initialize it all to zero (in js it initialized to undefined)
        let arr = new Array(64);
        arr.fill(0)
        //sends the new array to the "makeCheckerBoard" service which makes a checkerboard
        const newCheckerBoard = StartGameService.makeCheckerboard(arr);
        const newChessBoard = StartGameService.makeChessboard(newCheckerBoard);
        setBoard(newChessBoard)


    }, [])


    //set highlight of a piece
    const select = index => {
        //set the highlight unless there is no piece there
        if (board[index]?.piece != 'none' || index == -1)
            setHighlight(index);        
    }

    socket.on('newMove', board => {
        setBoard(board)
    })

    //Moves the piece based upon its location, and the type of piece
    const move = (index, type, row, file) => {
        //make a shallow copy of board so that we can mutate the object properites directly
        const newBoard = [...board]
        //The old square we are currently at
        const oldSquare = newBoard[highlight]
        const {color, piece} = oldSquare;

        //remove piece and color from oldSquare
        oldSquare.piece = 'none'
        oldSquare.piece = 'none'

        //The new square where we are moving to
        const newSquare = newBoard[index]
        newSquare.piece = piece
        newSquare.color = color

        socket.emit('move', board)
    }

    const changeColor = () => {
        if(color == 'white')
            setColor('black')
        else
            setColor('white')
    }

    return(
        <ChessContext.Provider value={{
            //data members
            board, turn, highlight, color,
            //methods
            select, move, changeColor
        }}>
            {props.children}
        </ChessContext.Provider>
    )
}

export default ChessContext;