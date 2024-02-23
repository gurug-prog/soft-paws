using Xunit;

namespace SoftPaws.CatsManagement.EntityFrameworkCore;

[CollectionDefinition(CatsManagementTestConsts.CollectionDefinitionName)]
public class CatsManagementEntityFrameworkCoreCollection : ICollectionFixture<CatsManagementEntityFrameworkCoreFixture>
{

}
