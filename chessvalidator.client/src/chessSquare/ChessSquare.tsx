import './ChessSquare.css';
import { Colour } from '../types/colour';
import ChessPiece from '../chessPiece/ChessPiece';
import { NullableChessPieceProps } from '../types/chessPieceProps';
import { useContext } from 'react';
import { CurrentSelectedSquareContext } from '../chessBoard/ChessBoard';


type ChessSquareProps = {
    xCoordinate: number,
    yCoordinate: number,
    chessPieceProps: NullableChessPieceProps
}

function ChessSquare(props: ChessSquareProps) {

    const currentSelectedSquare = useContext(CurrentSelectedSquareContext);

    const isHighlighted = currentSelectedSquare
        && currentSelectedSquare.xCoordinate == props.xCoordinate
        && currentSelectedSquare.yCoordinate == props.yCoordinate;
    const highlightedClassName = isHighlighted ? "chess-square-highlighted" : "";
    const colourClassName = `chess-square-${GetCheckeredColour(props.xCoordinate, props.yCoordinate)}`;
    const className = `chess-square ${colourClassName} ${highlightedClassName}`;

    const chessSquare =
        <div className={className} data-x-coordinate={props.xCoordinate} data-y-coordinate={props.yCoordinate}>
            {props.chessPieceProps && <ChessPiece {...props.chessPieceProps} />}
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