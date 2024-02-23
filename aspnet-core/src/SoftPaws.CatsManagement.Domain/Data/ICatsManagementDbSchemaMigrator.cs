using System.Threading.Tasks;

namespace SoftPaws.CatsManagement.Data;

public interface ICatsManagementDbSchemaMigrator
{
    Task MigrateAsync();
}
