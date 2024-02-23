using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SoftPaws.CatsManagement.Data;

/* This is used if database provider does't define
 * ICatsManagementDbSchemaMigrator implementation.
 */
public class NullCatsManagementDbSchemaMigrator : ICatsManagementDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
