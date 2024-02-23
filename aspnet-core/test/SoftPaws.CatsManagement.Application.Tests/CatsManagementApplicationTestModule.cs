using Volo.Abp.Modularity;

namespace SoftPaws.CatsManagement;

[DependsOn(
    typeof(CatsManagementApplicationModule),
    typeof(CatsManagementDomainTestModule)
)]
public class CatsManagementApplicationTestModule : AbpModule
{

}
