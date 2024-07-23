namespace ChessValidator.Server.Models.Input
{
    public class ChessPieceMoveJson
    {
        public ChessPieceMoveJson(CoordinateJson fromPosition, CoordinateJson toPosition)
        {
            FromPosition = fromPosition;
            ToPosition = toPosition;
        }

        public CoordinateJson FromPosition { get; set; }
        public CoordinateJson ToPosition { get; set; }
    }
}
