using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface ISubsetRetriever<T, TSearch>
    {
        Task<Subset<T>> GetListAsync(TSearch search, int skip, int take, string direction, string field);
    }
}
