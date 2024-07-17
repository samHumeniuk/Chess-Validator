import { ChessPieceType } from "./chessPieceType";
import { Colour } from "./colour";

type ChessPieceProps = {
    colour?: Colour
    chessPieceType?: ChessPieceType
}

type NullableChessPieceProps = ChessPieceProps | null

export { type ChessPieceProps, type NullableChessPieceProps };