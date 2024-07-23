
import { createContext, MouseEventHandler, useContext, useState } from 'react';
import ChessSquare from '../chessSquare/ChessSquare';
import './ChessBoard.css';
import { AppContext } from '../contexts/AppContext';
import { Coordinate, NullableCoordinate } from '../types/coordinate';
import { ChessPieceMove } from '../types/chessPieceMove';
import { ChessMoveProposal } from '../types/chessMoveProposal';
import { ChessBoardData } from '../types/chessBoardData';


type ChessBoardProps = {
    width?: number
    height?: number
}


export const CurrentSelectedSquareContext = createContext<NullableCoordinate>(null);

function ChessBoard({ height = 8, width = 8 }: ChessBoardProps) {

    const { services } = useContext(AppContext);

    const [chessBoardData, _] = useState<ChessBoardData>(createChessBoard);

    const [currentSelectedSquare, setCurrentSelectedSquare] = useState<NullableCoordinate>(null);

    const handleClick: MouseEventHandler = (event: MouseEvent) => {

        const xCoordinate = event.target.getAttribute("data-x-coordinate") || event.target.parentElement.getAttribute("data-x-coordinate");
        const yCoordinate = event.target.getAttribute("data-y-coordinate") || event.target.parentElement.getAttribute("data-y-coordinate");
        var coordinate: Coordinate = { xCoordinate: xCoordinate, yCoordinate: yCoordinate };

        if (currentSelectedSquare) {
            const move: ChessPieceMove = { fromPosition: currentSelectedSquare, toPosition: coordinate }
            const moveProposal: ChessMoveProposal = { chessBoard: chessBoardData, chessPieceMove: move }
            services.chessMoveValidatorService.TryMove(moveProposal);
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
                    <ChessSquare xCoordinate={x} yCoordinate={yCoordinate} key={`${x},${yCoordinate}`} chessPieceProps={chessBoardData.pieces[x][yCoordinate]} />)}
                </div>
            </CurrentSelectedSquareContext.Provider>)
    }


}

export default ChessBoard;