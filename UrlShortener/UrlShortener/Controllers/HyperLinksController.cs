using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;
using UrlShortener.Service.Admin.Interfaces;
using UrlShortener.Web.RequestModels;
using UrlShortener.Web.ViewModels;

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

        public IActionResult Create()
        {
            return View();
        }

        [HttpGet("/HyperLinks/GetAll/")]
        public async Task<IEnumerable<HyperLinks>> GetAll()
        {
            var categories = await _linksService.GetAllAsync();
            return categories;
        }

        [HttpPost("/HyperLinks/Create/")]
        public async Task<ActionResult> Create([FromBody] HyperLinksViewModel hyperLinksViewModel)
        {
            if (!ModelState.IsValid)
                return View();

            var shortLink = GenerateShortLink();
            hyperLinksViewModel.LinkShort = shortLink;
            var hyperLinks = new HyperLinks()
            {
                LinkOrig = hyperLinksViewModel.LinkOrig,
                LinkShort = hyperLinksViewModel.LinkShort
            };

            await _linksService.InsertAsync(hyperLinks);

            return Ok();
        }

        [HttpPost("/HyperLinks/GetListAsync")]
        public async Task<ActionResult<Subset<HyperLinks>>> GetListAsync([FromBody] SubsetRequestModel<string> subsetRequest)
        {
            return await _linksService.GetListAsync(
               subsetRequest.Search,
               subsetRequest.Skip,
               subsetRequest.Take,
               subsetRequest.Direction,
               subsetRequest.Field
           );
        }

        private Task<HyperLinks> GetOrigUrl(String shortLink)
        {
            return _linksService.GetStringAsync(shortLink);
        }

        private string GenerateShortLink()
        {
            var shortLink = RandomString(5);
            var shortLinkNull = GetOrigUrl(shortLink);
            while (shortLinkNull.Result != null)
            {
                shortLink = RandomString(5);
            }

            return shortLink;
        }

        private static string RandomString(int length)
        {
            var random = new Random();
            const string chars = "23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private static bool IsCheckValidUrl(String origUrl)
        {
            throw new NotImplementedException();
        }
    }
}
