using System;
using System.Collections.Generic;
using System.Text;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;

namespace UrlShortener.Service.Admin.Interfaces
{
    public interface ILinksService : IDeleter<int>,
        IInserter<Links>,
        IListRetriever<Links>,
        IRetriever<Links>,
        IUpdater<int, Links>,
        ISubsetRetriever<Links, string>
    {
    }
}
