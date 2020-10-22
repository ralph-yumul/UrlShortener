using System.Threading.Tasks;

namespace EatSilogAvenue.Core
{
    public interface IUpdater<Tkey, TEntity>
    {
        Task UpdateAsync(Tkey id, TEntity entity);
    }
}
