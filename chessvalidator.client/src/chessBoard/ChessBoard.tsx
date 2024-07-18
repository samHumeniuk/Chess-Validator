
import { useContext, useState } from 'react';
import ChessSquare from '../chessSquare/ChessSquare';
import './ChessBoard.css';
import { ChessPieceProps } from '../types/chessPieceProps';
import { AppContext } from '../contexts/AppContext';


type ChessBoardProps = {
    width?: number
    height?: number
}

type NullableChessPieceProps = ChessPieceProps | null

function ChessBoard({ height = 8, width = 8 }: ChessBoardProps) {

    const { services } = useContext(AppContext);

    const [chessPieces, _] = useState<NullableChessPieceProps[][]>(createChessBoard);


    function createChessBoard() {
        return services.chessBoardSetupService.createChessBoard();

    }

    return (
        [...Array(height)].map((_, y) => ChessRow(y))
    )

    function ChessRow(yCoordinate: number) {
        return (
            <div className="chess-row">{[...Array(width)].map((_, x) =>
                <ChessSquare xCoordinate={x} yCoordinate={yCoordinate} key={`${x},${yCoordinate}`} chessPieceProps={chessPieces[x][yCoordinate]} />)}
            </div>)
    }


}

export default ChessBoard;