using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SoftPaws.CatsManagement.Data;
using Volo.Abp.DependencyInjection;

namespace SoftPaws.CatsManagement.EntityFrameworkCore;

public class EntityFrameworkCoreCatsManagementDbSchemaMigrator
    : ICatsManagementDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreCatsManagementDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the CatsManagementDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<CatsManagementDbContext>()
            .Database
            .MigrateAsync();
    }
}
