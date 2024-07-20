
import { createContext, MouseEventHandler, useContext, useState } from 'react';
import ChessSquare from '../chessSquare/ChessSquare';
import './ChessBoard.css';
import { ChessPieceProps } from '../types/chessPieceProps';
import { AppContext } from '../contexts/AppContext';
import { Coordinate, NullableCoordinate } from '../types/coordinate';


type ChessBoardProps = {
    width?: number
    height?: number
}

type NullableChessPieceProps = ChessPieceProps | null

export const CurrentSelectedSquareContext = createContext<NullableCoordinate>(null);

function ChessBoard({ height = 8, width = 8 }: ChessBoardProps) {

    const { services } = useContext(AppContext);

    const [chessPieces, _] = useState<NullableChessPieceProps[][]>(createChessBoard);

    const [currentSelectedSquare, setCurrentSelectedSquare] = useState<NullableCoordinate>(null);

    const handleClick: MouseEventHandler = (event: MouseEvent) => {

        const xCoordinate = event.target.getAttribute("data-x-coordinate") || event.target.parentElement.getAttribute("data-x-coordinate");
        const yCoordinate = event.target.getAttribute("data-y-coordinate") || event.target.parentElement.getAttribute("data-y-coordinate");
        var coordinate: Coordinate = { xCoordinate: xCoordinate, yCoordinate: yCoordinate };

        if (currentSelectedSquare) {
            setCurrentSelectedSquare(null);
        }
        else {
            setCurrentSelectedSquare(coordinate);
        }

    };

    function createChessBoard() {
        return services.chessBoardSetupService.createChessBoard();

    }

    return (
        [...Array(height)].map((_, y) => ChessRow(y))
    )

    function ChessRow(yCoordinate: number) {
        return (
            <CurrentSelectedSquareContext.Provider value={currentSelectedSquare}>
                <div onClick={handleClick} className="chess-row">{[...Array(width)].map((_, x) =>
                    <ChessSquare xCoordinate={x} yCoordinate={yCoordinate} key={`${x},${yCoordinate}`} chessPieceProps={chessPieces[x][yCoordinate]} />)}
                </div>
            </CurrentSelectedSquareContext.Provider>)
    }


}

export default ChessBoard;