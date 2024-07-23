using ChessValidator.Models.Pieces;

namespace ChessValidator.Models
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
