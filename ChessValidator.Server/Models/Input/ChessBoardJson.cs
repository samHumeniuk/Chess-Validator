namespace ChessValidator.Server.Models.Input
{
    public class ChessBoardJson
    {
        public ChessBoardJson(PieceJson?[][] pieces)
        {
            Pieces = pieces;
        }
        public PieceJson?[][] Pieces { get; set; }
    }
}
