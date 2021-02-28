export default {
    //converts empty array into a checkerboard
    makeCheckerboard: board => {
        let checkerBoard = [];
        board.map((s, i) => {
            let square = {
                tile: (i + 1) % 2,
                piece: 'none',
                color: 'none',
                //up and down [columns]
                file: (i % 8) + 1,
                //left and right [rows]
                rank: 8 - Math.floor(i / 8),
            }
            if (Math.floor(i / 8) % 2)
                square.tile = (i + 0) % 2
            checkerBoard[i] = square
        })
        return checkerBoard
    },
    //converts checkerboard into a chessboard with pieces in start position
    makeChessboard: board => {
        board.map(piece => {
            //sets pawns
            if (piece.rank == 2) {
                piece.piece = 'pawn'
                piece.color = 'light'
            }

            if (piece.rank == 7) {
                piece.piece = 'pawn'
                piece.color = 'dark'
            }

            if (piece.rank == 1 && (piece.file == 1 || piece.file == 8)) {
                piece.piece = 'rook'
                piece.color = 'light'
            }

            if (piece.rank == 8 && (piece.file == 1 || piece.file == 8)) {
                piece.piece = 'rook'
                piece.color = 'dark'
            }

            if (piece.rank == 1 && (piece.file == 2 || piece.file == 7)) {
                piece.piece = 'night'
                piece.color = 'light'
            }

            if (piece.rank == 8 && (piece.file == 2 || piece.file == 7)) {
                piece.piece = 'night'
                piece.color = 'dark'
            }

            if (piece.rank == 1 && (piece.file == 3 || piece.file == 6)) {
                piece.piece = 'bishop'
                piece.color = 'light'
            }

            if (piece.rank == 8 && (piece.file == 3 || piece.file == 6)) {
                piece.piece = 'bishop'
                piece.color = 'dark'
            }

            if (piece.rank == 1 && piece.file == 4) {
                piece.piece = 'queen'
                piece.color = 'light'
            }

            if (piece.rank == 8 && piece.file == 4) {
                piece.piece = 'queen'
                piece.color = 'dark'
            }

            if (piece.rank == 1 && piece.file == 5) {
                piece.piece = 'king'
                piece.color = 'light'
            }

            if (piece.rank == 8 && piece.file == 5) {
                piece.piece = 'king'
                piece.color = 'dark'
            }
        })
        return board
    }

}