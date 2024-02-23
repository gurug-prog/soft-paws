using Volo.Abp.Modularity;

namespace SoftPaws.CatsManagement;

public abstract class CatsManagementApplicationTestBase<TStartupModule> : CatsManagementTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
