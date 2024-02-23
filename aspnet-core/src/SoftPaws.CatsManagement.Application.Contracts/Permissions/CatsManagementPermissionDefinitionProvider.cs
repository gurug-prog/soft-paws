using SoftPaws.CatsManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SoftPaws.CatsManagement.Permissions;

public class CatsManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(CatsManagementPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(CatsManagementPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<CatsManagementResource>(name);
    }
}
