﻿using System.Web;
using System.Web.Mvc;

namespace Angular_Service_Controller_WebApi_Demo
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
