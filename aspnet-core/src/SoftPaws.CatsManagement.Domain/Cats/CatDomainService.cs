using Microsoft.Extensions.Logging;
using SoftPaws.CatsManagement.Entities;
using SoftPaws.CatsManagement.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.Abp.Uow;

namespace SoftPaws.CatsManagement.Cats;

[UnitOfWork]
public class CatDomainService : DomainService
{
    private readonly ILogger<CatDomainService> _logger;
    private readonly ICatRepository _catRepository;

    public CatDomainService(
        ILogger<CatDomainService> logger,
        ICatRepository catRepository)
    {
        _logger = logger;
        _catRepository = catRepository;
    }

    public async Task<CatEntity> GetCatAsync(Guid id)
    {
        _logger.LogInformation("CatDomainService.GetCatAsync started");
        CatEntity result = new();
        try
        {
            result = await _catRepository.GetAsync(id);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatDomainService.GetCatAsync finished");
        }

        return result;
    }

    public async Task<KeyValuePair<int, List<CatEntity>>> GetCatsListAsync(
        int skipCount = 0,
        int maxResultCount = int.MaxValue,
        string sorting = "",
        string searchQuery = "",
        ICollection<CatBreed>? breedFilter = null)
    {
        _logger.LogInformation("CatDomainService.GetCatsListAsync started");
        KeyValuePair<int, List<CatEntity>> result = new(0, []);
        try
        {
            result = await _catRepository.GetCatsListAsync(
                skipCount,
                maxResultCount,
                sorting,
                searchQuery,
                breedFilter);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatDomainService.GetCatsListAsync finished");
        }

        return result;
    }

    public async Task<CatEntity> CreateCatAsync(CatEntity entity)
    {
        _logger.LogInformation("CatDomainService.CreateCatAsync started");
        CatEntity result = new();
        try
        {
            CatEntity cat = new(GuidGenerator.Create());
            cat.Name = entity.Name;
            cat.Age = entity.Age;
            cat.Breed = entity.Breed;
            cat.IsVaccinated = entity.IsVaccinated;

            result = await _catRepository.InsertAsync(cat, true);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatDomainService.CreateCatAsync finished");
        }

        return result;
    }

    public async Task<CatEntity> UpdateCatAsync(CatEntity entity)
    {
        _logger.LogInformation("CatDomainService.UpdateCatAsync started");
        CatEntity result = new();
        try
        {
            var existingCat = await _catRepository.GetAsync(entity.Id);
            existingCat.Name = entity.Name;
            existingCat.Age = entity.Age;
            existingCat.Breed = entity.Breed;
            existingCat.IsVaccinated = entity.IsVaccinated;

            result = await _catRepository.UpdateAsync(existingCat, true);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatDomainService.UpdateCatAsync finished");
        }

        return result;
    }

    public async Task<bool> RemoveCatAsync(Guid id)
    {
        _logger.LogInformation("CatDomainService.RemoveCatAsync started");
        bool result = false;
        try
        {
            var existingCat = await _catRepository.GetAsync(id);
            await _catRepository.DeleteAsync(id);
            result = true;
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatDomainService.RemoveCatAsync finished");
        }

        return result;
    }
}
