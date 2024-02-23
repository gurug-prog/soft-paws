using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace SoftPaws.CatsManagement;

[Dependency(ReplaceServices = true)]
public class CatsManagementBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "CatsManagement";
}
