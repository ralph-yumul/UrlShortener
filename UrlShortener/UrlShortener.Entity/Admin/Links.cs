using System;
using System.Collections.Generic;
using System.Text;

namespace UrlShortener.Entity.Admin
{
    public class Links
    {
        public int LinkId { get; set; }
        public string LinkShort { get; set; }
        public string LinkOrig { get; set; }
    }
}
