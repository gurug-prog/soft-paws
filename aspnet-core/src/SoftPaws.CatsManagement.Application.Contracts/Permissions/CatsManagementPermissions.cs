namespace SoftPaws.CatsManagement.Permissions;

public static class CatsManagementPermissions
{
    public const string GroupName = "CatsManagement";

    public static class Cats
    {
        public const string Default = GroupName + ".Cats";
        public const string Create = GroupName + ".Create";
        public const string Edit = GroupName + ".Edit";
        public const string Delete = GroupName + ".Delete";
    }
}
