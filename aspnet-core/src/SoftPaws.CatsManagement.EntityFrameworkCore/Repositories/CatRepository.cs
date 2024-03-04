using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SoftPaws.CatsManagement.Cats;
using SoftPaws.CatsManagement.Entities;
using SoftPaws.CatsManagement.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace SoftPaws.CatsManagement.Repositories;

public class CatRepository : EfCoreRepository<CatsManagementDbContext, CatEntity, Guid>, ICatRepository
{
    private readonly ILogger<CatRepository> _logger;
    public CatRepository(
        IDbContextProvider<CatsManagementDbContext> dbContextProvider,
        ILogger<CatRepository> logger)
        : base(dbContextProvider)
    {
        _logger = logger;
    }

    public async Task<KeyValuePair<int, List<CatEntity>>> GetCatsListAsync(
        int skipCount = 0,
        int maxResultCount = int.MaxValue,
        string sorting = "",
        string searchQuery = "",
        ICollection<CatBreed>? breedFilter = null)
    {
        _logger.LogInformation("CatRepository.GetCatsListAsync started");
        KeyValuePair<int, List<CatEntity>> result = new(0, []);
        try
        {
            var dbContext = await GetDbContextAsync();
            var searchPattern = searchQuery != "" ? $"%{searchQuery}%" : "";
            var catsFiltered = dbContext.Cats
                .WhereIf(searchQuery != "",
                    x => EF.Functions.Like(x.Name, searchPattern)
                    || EF.Functions.Like(x.Age.ToString(), searchPattern))
                .Skip(skipCount)
                .Take(maxResultCount);

            var sortingPattern = sorting == "" ? "CreationTime desc" : sorting;
            var catsSorted = catsFiltered.OrderBy(sortingPattern);
            var entities = await catsSorted.ToListAsync();
            result = new(entities.Count, entities);
        }
        catch (Exception ex)
        {
            _logger.LogException(ex);
            throw;
        }
        finally
        {
            _logger.LogInformation("CatRepository.GetCatsListAsync finished");
        }

        return result;
    }
}
