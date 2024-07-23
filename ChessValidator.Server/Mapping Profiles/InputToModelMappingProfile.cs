using AutoMapper;
using ChessValidator.Models;
using ChessValidator.Models.Pieces;
using ChessValidator.Server.Models.Input;

namespace ChessValidator.Server.Mapping_Profiles
{

    public class PieceTypeConverter : ITypeConverter<PieceJson?, Piece?>
    {
        public Piece? Convert(PieceJson? source, Piece? destination, ResolutionContext context)
        {
            if (source == null) return null;
            Colour colour = Enum.Parse<Colour>(source.Colour.ToString());
            switch (source.ChessPieceType)
            {
                case ChessPieceTypeJson.Pawn:
                    return new Pawn(colour);

                case ChessPieceTypeJson.Bishop:
                    return new Bishop(colour);

                case ChessPieceTypeJson.Knight:
                    return new Knight(colour);

                case ChessPieceTypeJson.Rook:
                    return new Rook(colour);

                case ChessPieceTypeJson.Queen:
                    return new Queen(colour);

                case ChessPieceTypeJson.King:
                    return new King(colour);
                default:
                    throw new Exception($"The piece {source.ChessPieceType} was not recognised");
            }
        }
    }

    public class InputToModelMappingProfile : Profile
    {
        public InputToModelMappingProfile()
        {
            var convertFunction = (PieceJson x) =>
            {
                Colour colour = Enum.Parse<Colour>(x.Colour.ToString());
                switch (x.ChessPieceType)
                {
                    case ChessPieceTypeJson.Pawn:
                        return new Pawn(colour);
                    default:
                        return new Pawn(colour);
                }
            };

            CreateMap<ColourJson, Colour>();
            CreateMap<CoordinateJson, Coordinate>();
            CreateMap<ChessPieceMoveJson, ChessPieceMove>();
            CreateMap<PieceJson?, Piece?>()
                .ConvertUsing(typeof(PieceTypeConverter));
            CreateMap<ChessMoveProposalJson, ChessMoveProposal>();
            CreateMap<ChessBoardJson, ChessBoard>();
        }
    }
}
