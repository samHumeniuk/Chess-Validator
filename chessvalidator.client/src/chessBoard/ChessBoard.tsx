
import { useState } from 'react';
import ChessSquare from '../chessSquare/ChessSquare';
import './ChessBoard.css';
import { ChessPieceProps } from '../types/chessPieceProps';
import { ChessPieceType } from '../types/chessPieceType';
import { Colour } from '../types/colour';


type ChessBoardProps = {
    width?: number
    height?: number
}

type NullableChessPieceProps = ChessPieceProps | null

function ChessBoard({ height = 8, width = 8 }: ChessBoardProps) {

    const [chessPieces, _] = useState<NullableChessPieceProps[][]>(createChessBoard);

    function createBackRow(colour: Colour) {
        let frontRow: ChessPieceProps[] = [
            {
                chessPieceType: ChessPieceType.Rook,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Knight,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Bishop,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Queen,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.King,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Bishop,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Knight,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Rook,
                colour: colour
            }
        ];
        return frontRow;
    }

    function createFrontRow(colour: Colour) {
        let backRow: ChessPieceProps[] = [
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            },
            {
                chessPieceType: ChessPieceType.Pawn,
                colour: colour
            }
        ];
        return backRow;
    }

    function createEmptyRow() {
        let emptyRow: NullableChessPieceProps[] = [
            null, null, null, null,
            null, null, null, null
        ];
        return emptyRow;
    }


    function createChessBoard() {

        let whiteBackRow = createBackRow(Colour.White);
        let whiteFrontRow = createFrontRow(Colour.White);

        let blackFrontRow = createFrontRow(Colour.Black);
        let blackBackRow = createBackRow(Colour.Black);

        let chessBoard = [
            blackBackRow,
            blackFrontRow,
            createEmptyRow(),
            createEmptyRow(),
            createEmptyRow(),
            createEmptyRow(),
            whiteFrontRow,
            whiteBackRow,
        ];
        return chessBoard;

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