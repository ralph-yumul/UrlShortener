using EatSilogAvenue.Core;
using System;
using System.Collections.Generic;
using System.Text;
using UrlShortener.Entity.Admin;

namespace UrlShortener.Repository.Admin.Interfaces
{
    public interface ILinksRepository : IDeleter<int>,
        IInserter<Links>,
        IListRetriever<Links>,
        IRetriever<Links>,
        IUpdater<int, Links>,
        ISubsetRetriever<Links, string>
    {
        
    }
}
