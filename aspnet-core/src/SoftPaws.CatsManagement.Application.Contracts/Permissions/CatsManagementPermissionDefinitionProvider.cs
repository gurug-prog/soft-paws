using SoftPaws.CatsManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SoftPaws.CatsManagement.Permissions;

public class CatsManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(CatsManagementPermissions.GroupName);
        var catsPermission = myGroup.AddPermission(
            CatsManagementPermissions.Cats.Default, L("Permission:Cats"));
        catsPermission.AddChild(
            CatsManagementPermissions.Cats.Create, L("Permission:Cats.Create"));
        catsPermission.AddChild(
            CatsManagementPermissions.Cats.Edit, L("Permission:Cats.Edit"));
        catsPermission.AddChild(
            CatsManagementPermissions.Cats.Delete, L("Permission:Cats.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<CatsManagementResource>(name);
    }
}
