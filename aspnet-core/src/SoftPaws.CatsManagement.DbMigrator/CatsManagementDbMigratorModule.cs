using SoftPaws.CatsManagement.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace SoftPaws.CatsManagement.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(CatsManagementEntityFrameworkCoreModule),
    typeof(CatsManagementApplicationContractsModule)
    )]
public class CatsManagementDbMigratorModule : AbpModule
{
}
