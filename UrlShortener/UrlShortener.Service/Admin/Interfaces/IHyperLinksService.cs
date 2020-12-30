using System;
using System.Collections.Generic;
using System.Text;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;

namespace UrlShortener.Service.Admin.Interfaces
{
    public interface IHyperLinksService : IDeleter<int>,
        IInserter<HyperLinks>,
        IListRetriever<HyperLinks>,
        IStringRetriever<HyperLinks>,
        IRetriever<HyperLinks>,
        IUpdater<int, HyperLinks>,
        ISubsetRetriever<HyperLinks, string>
    {
    }
}
