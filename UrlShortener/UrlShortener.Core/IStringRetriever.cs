using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface IStringRetriever<TEntity>
    {
        Task<TEntity> GetStringAsync(String param);
    }
}
