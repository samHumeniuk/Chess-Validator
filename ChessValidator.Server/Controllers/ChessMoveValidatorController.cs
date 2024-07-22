using Microsoft.AspNetCore.Mvc;

namespace ChessValidator.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChessMoveValidatorController : ControllerBase
    {

        private readonly ILogger<ChessMoveValidatorController> _logger;

        public ChessMoveValidatorController(ILogger<ChessMoveValidatorController> logger)
        {
            _logger = logger;
        }

        [HttpPost(Name = "PostChessMoveValidator")]
        public Boolean ValidateMove()
        {
            return true;
        }
    }
}
