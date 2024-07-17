
import { ChessPieceType } from '../types/chessPieceType';
import { ChessPieceProps } from '../types/chessPieceProps';
import './ChessPiece.css';


function ChessPiece(props: ChessPieceProps) {

    const getUnicodeChessPiece = (piece?: ChessPieceType): string => {
        switch (piece) {
            case ChessPieceType.King:
                return '♚';
            case ChessPieceType.Queen:
                return '♛';
            case ChessPieceType.Rook:
                return '♜';
            case ChessPieceType.Bishop:
                return '♝';
            case ChessPieceType.Knight:
                return '♞';
            case ChessPieceType.Pawn:
                return '♟';
            default:
                return '';
        }
    }

    var className = `chess-piece chess-piece-${props.colour}`;
    return (
        <div className={className}>
            {getUnicodeChessPiece(props.chessPieceType)}
        </div>
    )


}

export default ChessPiece;