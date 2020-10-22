using System.Threading.Tasks;

namespace EatSilogAvenue.Core
{
    public interface IDeleter<Tkey>
    {
        Task DeleteAsync(Tkey id);
    }
}
