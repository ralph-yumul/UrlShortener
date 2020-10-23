using System.Collections.Generic;
using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface IListRetriever<TEntity>
    {
        Task<IEnumerable<TEntity>> GetListAsync();
    }
}
