using Volo.Abp.Modularity;

namespace SoftPaws.CatsManagement;

/* Inherit from this class for your domain layer tests. */
public abstract class CatsManagementDomainTestBase<TStartupModule> : CatsManagementTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
