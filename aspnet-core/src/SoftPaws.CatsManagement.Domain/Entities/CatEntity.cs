using SoftPaws.CatsManagement.Cats;
using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace SoftPaws.CatsManagement.Entities;

public class CatEntity : FullAuditedAggregateRoot<Guid>
{
    public string Name { get; set; }
    public int Age { get; set; }
    public CatBreed Breed { get; set; }
    public bool IsVaccinated { get; set; }

    public CatEntity()
        : base(Guid.Empty)
    {
        Name = "";
        Age = 0;
        Breed = CatBreed.None;
        IsVaccinated = false;
    }

    public CatEntity(Guid id)
        : base(id)
    {
        Name = "";
        Age = 0;
        Breed = CatBreed.None;
        IsVaccinated = false;
    }
}
