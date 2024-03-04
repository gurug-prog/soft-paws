using SoftPaws.CatsManagement.Cats;
using SoftPaws.CatsManagement.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace SoftPaws.CatsManagement.Repositories;

public interface ICatRepository : IRepository<CatEntity, Guid>
{
    Task<KeyValuePair<int, List<CatEntity>>> GetCatsListAsync(
        int skipCount = 0,
        int maxResultCount = int.MaxValue,
        string sorting = "",
        string searchQuery = "",
        ICollection<CatBreed>? breedFilter = null);
}
