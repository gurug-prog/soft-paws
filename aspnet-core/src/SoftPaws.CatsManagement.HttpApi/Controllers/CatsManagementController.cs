using SoftPaws.CatsManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SoftPaws.CatsManagement.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class CatsManagementController : AbpControllerBase
{
    protected CatsManagementController()
    {
        LocalizationResource = typeof(CatsManagementResource);
    }
}
