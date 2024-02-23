using System;
using System.Collections.Generic;
using System.Text;
using SoftPaws.CatsManagement.Localization;
using Volo.Abp.Application.Services;

namespace SoftPaws.CatsManagement;

/* Inherit your application services from this class.
 */
public abstract class CatsManagementAppService : ApplicationService
{
    protected CatsManagementAppService()
    {
        LocalizationResource = typeof(CatsManagementResource);
    }
}
