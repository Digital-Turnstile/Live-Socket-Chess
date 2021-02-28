let board = []

const setBoard = arr => {
    board = arr;
    console.log('save new move')
}


const move = move => {

}

const getBoard = () => {
    console.log('send new move')
    return board
}

module.exports = {setBoard, move, getBoard}