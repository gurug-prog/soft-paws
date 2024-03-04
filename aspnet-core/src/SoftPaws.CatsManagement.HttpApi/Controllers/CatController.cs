using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SoftPaws.CatsManagement.Cats;
using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace SoftPaws.CatsManagement.Controllers;

[RemoteService(Name = CatsManagementRemoteServiceConsts.RemoteServiceName)]
[Area(CatsManagementRemoteServiceConsts.ModuleName)]
[ControllerName("Cats")]
[Route("api/CatsManagement/Cats")]
public class CatController : CatsManagementController
{
    private readonly ILogger<CatController> _logger;
    private readonly ICatAppService _catAppService;

    public CatController(
        ILogger<CatController> logger,
        ICatAppService catAppService)
    {
        _logger = logger;
        _catAppService = catAppService;
    }

    [HttpGet("GetCatAsync/{id}")]
    public async Task<CatDto> GetCatAsync(Guid id)
    {
        _logger.LogInformation("CatController.GetCatAsync started");

        var response = await _catAppService.GetCatAsync(id);

        _logger.LogInformation("CatController.GetCatAsync finished");

        return response;
    }

    [HttpGet("GetCatsListAsync")]
    public async Task<PagedResultDto<CatDto>> GetCatsListAsync(GetCatListDto input)
    {
        _logger.LogInformation("CatController.GetCatsListAsync started");

        var response = await _catAppService.GetCatsListAsync(input);

        _logger.LogInformation("CatController.GetCatsListAsync finished");

        return response;
    }

    [HttpPost("CreateCatAsync")]
    public async Task<CatDto> CreateCatAsync(CatDto input)
    {
        _logger.LogInformation("CatController.CreateCatAsync started");

        var response = await _catAppService.CreateCatAsync(input);

        _logger.LogInformation("CatController.CreateCatAsync finished");

        return response;
    }

    [HttpPut("UpdateCatAsync")]
    public async Task<CatDto> UpdateCatAsync(CatDto input)
    {
        _logger.LogInformation("CatController.UpdateCatAsync started");

        var response = await _catAppService.UpdateCatAsync(input);

        _logger.LogInformation("CatController.UpdateCatAsync finished");

        return response;
    }

    [HttpDelete("RemoveCatAsync/{id}")]
    public async Task<bool> RemoveCatAsync(Guid id)
    {
        _logger.LogInformation("CatController.RemoveCatAsync started");

        var response = await _catAppService.RemoveCatAsync(id);

        _logger.LogInformation("CatController.RemoveCatAsync finished");

        return response;
    }
}
