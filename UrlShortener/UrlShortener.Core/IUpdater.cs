using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface IUpdater<Tkey, TEntity>
    {
        Task UpdateAsync(Tkey id, TEntity entity);
    }
}
