using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace youSayIGuess.wwwroot.Controllers
{
    public class HomeController : Controller
    {
        public string SessionKeyName = null;

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult GuessSong()
        {
            return View();
        }
    }
}