using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;
using UrlShortener.Service.Admin.Interfaces;

namespace UrlShortener.Web.Controllers
{
    public class LinksController : Controller
    {
        private readonly ILinksService _linksService;
        private readonly ILogger<LinksController> _logger;

        public LinksController(ILinksService linksService, ILogger<LinksController> logger)
        {
            _linksService = linksService;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IEnumerable<Links>> GetAll()
        {
            var categories = await _linksService.GetListAsync();
            return categories;
        }

        [HttpPost]
        public async Task<ActionResult<Subset<Links>>> GetAllAsync([FromBody] SubsetRequestModel<string> subsetRequest)
        {
            var searchedLinks = await _linksService.GetListAsync(
               subsetRequest.Search,
               subsetRequest.Skip,
               subsetRequest.Take,
               subsetRequest.Direction,
               subsetRequest.Field
           );

            return searchedLinks;
        }
    }
}
