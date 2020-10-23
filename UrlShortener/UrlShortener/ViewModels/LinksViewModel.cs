using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UrlShortener.Web.ViewModels
{
    public class LinksViewModel
    {
        public int LinkId { get; set; }

        public string LinkShort { get; set; }

        [Required(ErrorMessage = "URL is required.")]
        [Display(Name = "Enter URL")]
        public string LinkOrig { get; set; }
    }
}
