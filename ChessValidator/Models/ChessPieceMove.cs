namespace ChessValidator.Models
{
    public class ChessPieceMove
    {
        public ChessPieceMove(Coordinate fromPosition, Coordinate toPosition)
        {
            FromPosition = fromPosition;
            ToPosition = toPosition;
        }

        public Coordinate FromPosition { get; set; }
        public Coordinate ToPosition { get; set; }
    }
}
