using SoftPaws.CatsManagement.Samples;
using Xunit;

namespace SoftPaws.CatsManagement.EntityFrameworkCore.Domains;

[Collection(CatsManagementTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<CatsManagementEntityFrameworkCoreTestModule>
{

}
