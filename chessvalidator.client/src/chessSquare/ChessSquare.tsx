import './ChessSquare.css';
import { Colour } from '../types/colour';
import ChessPiece from '../chessPiece/ChessPiece';
import { ChessPieceType } from '../types/chessPieceType';


type ChessSquareProps = {
    xCoordinate: number,
    yCoordinate: number,
}

function ChessSquare(props : ChessSquareProps) {

    const className = `chess-square ${GetCheckeredColour(props.xCoordinate, props.yCoordinate)}`
    const chessSquare =
        <div className={className} data-x-coordinate={props.xCoordinate} data-y-coordinate={props.yCoordinate}>
            <ChessPiece colour={Colour.White} chessPieceType={ChessPieceType.Pawn} />
        </div>

    return (
        chessSquare
    );

    function GetCheckeredColour(xCoordinate: number, yCoordinate: number): Colour {
        if ((xCoordinate + yCoordinate) % 2 == 0) {
            return Colour.White;
        }
        else {
            return Colour.Black;
        }
    }

}

export default ChessSquare;