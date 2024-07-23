
using System.Text.Json.Serialization;

namespace ChessValidator.Server.Models.Input
{
    public class PieceJson
    {
        public PieceJson(ColourJson colour, ChessPieceTypeJson chessPieceType)
        {
            Colour = colour;
            ChessPieceType = chessPieceType;
        }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ColourJson Colour { get; set; }


        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ChessPieceTypeJson ChessPieceType { get; set; }
    }
}
