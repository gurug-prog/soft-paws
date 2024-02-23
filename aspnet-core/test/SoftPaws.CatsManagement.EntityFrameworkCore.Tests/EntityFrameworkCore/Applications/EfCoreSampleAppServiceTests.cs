using SoftPaws.CatsManagement.Samples;
using Xunit;

namespace SoftPaws.CatsManagement.EntityFrameworkCore.Applications;

[Collection(CatsManagementTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<CatsManagementEntityFrameworkCoreTestModule>
{

}
