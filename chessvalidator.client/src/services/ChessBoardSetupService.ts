import { ChessBoardData } from "../types/chessBoardData";
import { ChessPieceProps, NullableChessPieceProps } from "../types/chessPieceProps";
import { ChessPieceType } from "../types/chessPieceType";
import { Colour } from "../types/colour";

class ChessBoardSetupService {

    constructor() { }

    createBackRow(colour: Colour) {
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

    createFrontRow(colour: Colour) {
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

    createEmptyRow() {
        let emptyRow: NullableChessPieceProps[] = [
            null, null, null, null,
            null, null, null, null
        ];
        return emptyRow;
    }

    createChessBoard() {

        let whiteBackRow = this.createBackRow(Colour.White);
        let whiteFrontRow = this.createFrontRow(Colour.White);

        let blackFrontRow = this.createFrontRow(Colour.Black);
        let blackBackRow = this.createBackRow(Colour.Black);

        let pieces = [
            blackBackRow,
            blackFrontRow,
            this.createEmptyRow(),
            this.createEmptyRow(),
            this.createEmptyRow(),
            this.createEmptyRow(),
            whiteFrontRow,
            whiteBackRow,
        ];
        const chessBoard: ChessBoardData = {
            pieces: pieces
        };
        return chessBoard

    }

}


export default ChessBoardSetupService;