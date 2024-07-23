
using System.Text.Json.Serialization;

namespace ChessValidator.Server.Models.Input
{
    public class Piece
    {
        public Piece(Colour colour, ChessPieceType chessPieceType)
        {
            Colour = colour;
            ChessPieceType = chessPieceType;
        }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Colour Colour { get; set; }


        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ChessPieceType ChessPieceType { get; set; }
    }
}
