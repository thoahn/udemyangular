﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UdemyAngular.Controllers
{
    public class withControllerAsController : Controller
    {
        // GET: withControllerAs
        public ActionResult Index()
        {
            return View();
        }
    }
}