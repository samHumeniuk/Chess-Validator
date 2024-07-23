namespace ChessValidator.Server.Models.Input
{
    public class ChessMoveProposal
    {
        public ChessMoveProposal(ChessBoard chessBoard, ChessPieceMove chessPieceMove)
        {
            ChessBoard = chessBoard;
            ChessPieceMove = chessPieceMove;
        }

        public ChessBoard ChessBoard { get; set; }
        public ChessPieceMove ChessPieceMove { get; set; }
    }
}
