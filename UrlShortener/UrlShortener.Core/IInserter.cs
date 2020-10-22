using System.Threading.Tasks;

namespace EatSilogAvenue.Core
{
    public interface IInserter<TEntity>
    {
        Task InsertAsync(TEntity entity);
    }
}
