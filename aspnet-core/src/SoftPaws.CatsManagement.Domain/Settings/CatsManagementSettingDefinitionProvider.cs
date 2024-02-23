using Volo.Abp.Settings;

namespace SoftPaws.CatsManagement.Settings;

public class CatsManagementSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(CatsManagementSettings.MySetting1));
    }
}
