using AutoMapper;
using SoftPaws.CatsManagement.Cats;
using SoftPaws.CatsManagement.Entities;

namespace SoftPaws.CatsManagement;

public class CatsManagementApplicationAutoMapperProfile : Profile
{
    public CatsManagementApplicationAutoMapperProfile()
    {
        CreateMap<CatEntity, CatDto>()
            .ReverseMap();
    }
}
