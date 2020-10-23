using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface IRetriever<TEntity>
    {
        Task<TEntity> GetAsync(int id);
    }
}
