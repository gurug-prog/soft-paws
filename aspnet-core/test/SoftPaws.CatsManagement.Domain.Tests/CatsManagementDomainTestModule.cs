using Volo.Abp.Modularity;

namespace SoftPaws.CatsManagement;

[DependsOn(
    typeof(CatsManagementDomainModule),
    typeof(CatsManagementTestBaseModule)
)]
public class CatsManagementDomainTestModule : AbpModule
{

}
