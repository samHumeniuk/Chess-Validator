using ChessValidator.Server.Models.Input;
using ChessValidator.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ChessValidator.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChessMoveValidatorController : ControllerBase
    {

        private readonly ILogger<ChessMoveValidatorController> _logger;
        private readonly ChessMoveValidator _moveValidator;

        public ChessMoveValidatorController(ILogger<ChessMoveValidatorController> logger, ChessMoveValidator moveValidator)
        {
            _logger = logger;
            _moveValidator = moveValidator;
        }

        [HttpPost(Name = "PostChessMoveValidator")]
        public Boolean ValidateMove(ChessMoveProposal chessMoveProposal)
        {
            var result = _moveValidator.ValidateMove(chessMoveProposal);
            return result;
        }
    }
}
