using System.Collections.Generic;
using System.Threading.Tasks;

namespace EatSilogAvenue.Core
{
    public interface IListRetriever<TEntity>
    {
        Task<IEnumerable<TEntity>> GetListAsync();
    }
}
