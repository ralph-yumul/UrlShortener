using System.Threading.Tasks;

namespace UrlShortener.Core
{
    public interface IDeleter<Tkey>
    {
        Task DeleteAsync(Tkey id);
    }
}
