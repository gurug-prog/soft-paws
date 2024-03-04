using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using SoftPaws.CatsManagement.Entities;
using SoftPaws.CatsManagement.Permissions;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace SoftPaws.CatsManagement.Cats;

[Authorize(CatsManagementPermissions.Cats.Default)]
public class CatAppService : CatsManagementAppService, ICatAppService
{
    private readonly ILogger<CatAppService> _logger;
    private readonly CatDomainService _catDomainService;

    public CatAppService(
        ILogger<CatAppService> logger,
        CatDomainService catDomainService)
    {
        _logger = logger;
        _catDomainService = catDomainService;
    }

    [Authorize(CatsManagementPermissions.Cats.Create)]
    public async Task<CatDto> CreateCatAsync(CatDto input)
    {
        _logger.LogInformation("CatAppService.CreateCatAsync started");
        CatDto result = new();
        try
        {
            var entity = ObjectMapper.Map<CatDto, CatEntity>(input);
            var cat = await _catDomainService.CreateCatAsync(entity);
            result = ObjectMapper.Map<CatEntity, CatDto>(cat);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatAppService.CreateCatAsync finished");
        }

        return result;
    }

    public async Task<CatDto> GetCatAsync(Guid id)
    {
        _logger.LogInformation("CatAppService.GetCatAsync started");
        CatDto result = new();
        try
        {
            var entity = await _catDomainService.GetCatAsync(id);
            result = ObjectMapper.Map<CatEntity, CatDto>(entity);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatAppService.GetCatAsync finished");
        }

        return result;
    }

    public async Task<PagedResultDto<CatDto>> GetCatsListAsync(GetCatListDto input)
    {
        _logger.LogInformation("CatAppService.GetCatsListAsync started");
        PagedResultDto<CatDto> result = new();
        try
        {
            var response = await _catDomainService.GetCatsListAsync(
                input.SkipCount,
                input.MaxResultCount,
                input.Sorting,
                input.SearchQuery,
                input.BreedFilter);
            var entities = ObjectMapper.Map<List<CatEntity>, List<CatDto>>(response.Value);
            result = new(response.Key, entities);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatAppService.GetCatsListAsync finished");
        }

        return result;
    }

    [Authorize(CatsManagementPermissions.Cats.Edit)]
    public async Task<CatDto> UpdateCatAsync(CatDto input)
    {
        _logger.LogInformation("CatAppService.UpdateCatAsync started");
        CatDto result = new();
        try
        {
            var entity = ObjectMapper.Map<CatDto, CatEntity>(input);
            var cat = await _catDomainService.UpdateCatAsync(entity);
            result = ObjectMapper.Map<CatEntity, CatDto>(cat);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatAppService.UpdateCatAsync finished");
        }

        return result;
    }

    [Authorize(CatsManagementPermissions.Cats.Delete)]
    public async Task<bool> RemoveCatAsync(Guid id)
    {
        _logger.LogInformation("CatAppService.RemoveCatAsync started");
        bool result = false;
        try
        {
            result = await _catDomainService.RemoveCatAsync(id);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatAppService.RemoveCatAsync finished");
        }

        return result;
    }
}
