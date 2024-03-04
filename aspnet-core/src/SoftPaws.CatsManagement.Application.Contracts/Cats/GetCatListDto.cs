using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace SoftPaws.CatsManagement.Cats;

public class GetCatListDto : PagedResultRequestDto
{
    public string Sorting { get; set; } = "";
    public string SearchQuery { get; set; } = "";
    public ICollection<CatBreed>? BreedFilter { get; set; } = null;
}
