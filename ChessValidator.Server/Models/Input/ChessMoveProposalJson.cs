namespace ChessValidator.Server.Models.Input
{
    public class ChessMoveProposalJson
    {
        public ChessMoveProposalJson(ChessBoardJson chessBoard, ChessPieceMoveJson chessPieceMove)
        {
            ChessBoard = chessBoard;
            ChessPieceMove = chessPieceMove;
        }

        public ChessBoardJson ChessBoard { get; set; }
        public ChessPieceMoveJson ChessPieceMove { get; set; }
    }
}
