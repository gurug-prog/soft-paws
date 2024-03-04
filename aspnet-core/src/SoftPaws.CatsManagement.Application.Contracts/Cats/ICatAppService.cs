using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace SoftPaws.CatsManagement.Cats;

public interface ICatAppService : IApplicationService
{
    Task<CatDto> GetCatAsync(Guid id);
    Task<PagedResultDto<CatDto>> GetCatsListAsync(GetCatListDto input);
    Task<CatDto> CreateCatAsync(CatDto input);
    Task<CatDto> UpdateCatAsync(CatDto input);
    Task<bool> RemoveCatAsync(Guid id);
}
