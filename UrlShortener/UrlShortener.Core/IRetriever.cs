using System.Threading.Tasks;

namespace EatSilogAvenue.Core
{
    public interface IRetriever<TEntity>
    {
        Task<TEntity> GetAsync(int id);
    }
}
