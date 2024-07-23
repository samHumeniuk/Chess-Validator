using AutoMapper;
using ChessValidator.Models;
using ChessValidator.Server.Models.Input;
using ChessValidator.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChessValidator.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChessMoveValidatorController : ControllerBase
    {

        private readonly ILogger<ChessMoveValidatorController> _logger;
        private readonly ChessMoveValidator _moveValidator;
        private readonly IMapper _mapper;

        public ChessMoveValidatorController(ILogger<ChessMoveValidatorController> logger, ChessMoveValidator moveValidator, IMapper mapper)
        {
            _logger = logger;
            _moveValidator = moveValidator;
            _mapper = mapper;

        }

        [HttpPost(Name = "PostChessMoveValidator")]
        public Boolean ValidateMove(ChessMoveProposalJson chessMoveProposalJson)
        {
            var chessMoveProposal = _mapper.Map<ChessMoveProposal>(chessMoveProposalJson);
            var result = _moveValidator.ValidateMove(chessMoveProposal);
            return result;
        }
    }
}
