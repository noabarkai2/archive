using graphQLExample;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

[ApiController]
[Route("api/login")]
public class LoginController : ControllerBase
{
    private readonly IUserRepository _userRepository;

    public LoginController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }


    [HttpPost]
    public IActionResult Login([FromBody] UserLoginModel loginModel)
    {
        var user = _userRepository.GetUsers().FirstOrDefault(u => u.PersonalId == loginModel.PersonalId && u.MilitaryId == loginModel.MilitaryId);
        if (user == null)
        {
            return Unauthorized();
        }

        
        var sessionId = Guid.NewGuid().ToString();
        user.SessionId = sessionId;
        _userRepository.UpdateUser(user);

        return Ok(new { SessionId = sessionId });
    }
}

public class UserLoginModel
{
    public string PersonalId { get; set; }
    public string MilitaryId { get; set; }
}
