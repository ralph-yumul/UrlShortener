using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;
using UrlShortener.Service.Admin.Interfaces;
using UrlShortener.Web.RequestModels;

namespace UrlShortener.Web.Controllers
{
    public class HyperLinksController : Controller
    {
        private readonly IHyperLinksService _linksService;

        public HyperLinksController(IHyperLinksService linksService)
        {
            _linksService = linksService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IEnumerable<HyperLinks>> GetAll()
        {
            var categories = await _linksService.GetListAsync();
            return categories;
        }

        [HttpPost]
        public async Task<ActionResult<Subset<HyperLinks>>> GetAsync([FromBody] SubsetRequestModel<string> subsetRequest)
        {
            return await _linksService.GetListAsync(
               subsetRequest.Search,
               subsetRequest.Skip,
               subsetRequest.Take,
               subsetRequest.Direction,
               subsetRequest.Field
           );
        }
    }
}
