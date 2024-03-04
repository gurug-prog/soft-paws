using System;
using Volo.Abp.Application.Dtos;

namespace SoftPaws.CatsManagement.Cats;

public class CatDto : EntityDto<Guid>
{
    public string Name { get; set; } = "";
    public int Age { get; set; } = 0;
    public CatBreed Breed { get; set; } = CatBreed.None;
    public bool IsVaccinated { get; set; } = false;
    public DateTime CreationTime { get; set; } = DateTime.MinValue;
}
