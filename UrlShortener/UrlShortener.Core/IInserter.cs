using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface IInserter<TEntity>
    {
        Task InsertAsync(TEntity entity);
    }
}
