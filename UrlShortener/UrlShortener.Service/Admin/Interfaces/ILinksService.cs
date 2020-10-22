using EatSilogAvenue.Core;
using System;
using System.Collections.Generic;
using System.Text;
using UrlShortener.Entity.Admin;

namespace UrlShortener.Service.Admin.Interfaces
{
    interface ILinksService : IDeleter<int>,
        IInserter<Links>,
        IListRetriever<Links>,
        IRetriever<Links>,
        IUpdater<int, Links>,
        ISubsetRetriever<Links, string>
    {
    }
}
