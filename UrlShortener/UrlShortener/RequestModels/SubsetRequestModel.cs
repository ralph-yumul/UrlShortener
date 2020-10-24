using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UrlShortener.Web.RequestModels
{
    public class SubsetRequestModel<T>
    {
        public string Direction { get; set; }
        public string Field { get; set; }
        public T Search { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
    }
}
