using System;
using System.Collections.Generic;

namespace AngularMaterialDotNet.API.Models
{
    // Models returned by AccountController actions.

    public class GetUsersViewModel
    {
        public string Id { get; set; }

        public string UserName { get; set; }
    }

    //public class ManageInfoViewModel
    //{
    //    public string LocalLoginProvider { get; set; }

    //    public string Email { get; set; }

    //    public IEnumerable<UserLoginInfoViewModel> Logins { get; set; }

    //    public IEnumerable<ExternalLoginViewModel> ExternalLoginProviders { get; set; }
    //}

    //public class UserInfoViewModel
    //{
    //    public string Email { get; set; }

    //    public bool HasRegistered { get; set; }

    //    public string LoginProvider { get; set; }
    //}

    //public class UserLoginInfoViewModel
    //{
    //    public string LoginProvider { get; set; }

    //    public string ProviderKey { get; set; }
    //}
}
