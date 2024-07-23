namespace ChessValidator.Models.Pieces
{
    public abstract class Piece
    {
        public Piece(Colour colour)
        {
            Colour = colour;
        }

        public Colour Colour { get; set; }

    }
}
