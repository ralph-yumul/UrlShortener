using System;
using System.Collections.Generic;
using System.Text;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;

namespace UrlShortener.Repository.Admin.Interfaces
{
    public interface IHyperLinksRepository : IDeleter<int>,
        IInserter<HyperLinks>,
        IListRetriever<HyperLinks>,
        IRetriever<HyperLinks>,
        IUpdater<int, HyperLinks>,
        ISubsetRetriever<HyperLinks, string>
    {
        
    }
}
