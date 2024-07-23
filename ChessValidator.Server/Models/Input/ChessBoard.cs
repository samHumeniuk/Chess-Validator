namespace ChessValidator.Server.Models.Input
{
    public class ChessBoard
    {
        public ChessBoard(Piece?[][] pieces)
        {
            Pieces = pieces;
        }
        public Piece?[][] Pieces { get; set; }
    }
}
