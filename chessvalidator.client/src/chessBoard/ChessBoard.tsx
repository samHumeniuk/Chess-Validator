
import ChessSquare from '../chessSquare/ChessSquare';
import './ChessBoard.css';


type ChessBoardProps = {
    width?: number
    height?: number
}

function ChessBoard({height=8, width=8 } : ChessBoardProps) {

    return (
        [...Array(height)].map((_, y) => ChessRow(y))
    )

    function ChessRow(yCoordinate: number) {
        return (
            <div className="chess-row">{[...Array(width)].map((_, x) =>
                <ChessSquare xCoordinate={x} yCoordinate={yCoordinate} key={`${x} + ${yCoordinate}`} />)}
            </div>)
    }


}

export default ChessBoard;