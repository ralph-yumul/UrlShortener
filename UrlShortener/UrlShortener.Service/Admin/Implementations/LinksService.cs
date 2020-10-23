using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UrlShortener.Core;
using UrlShortener.Entity.Admin;
using UrlShortener.Repository.Admin.Interfaces;
using UrlShortener.Service.Admin.Interfaces;

namespace UrlShortener.Service.Admin.Implementations
{
    public class LinksService : ILinksService
    {
        private readonly ILinksRepository _linksRepository;
        public LinksService(ILinksRepository linksRepository)
        {
            _linksRepository = linksRepository;
        }
        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Links> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Links>> GetListAsync()
        {
            return await _linksRepository.GetListAsync();
        }

        public async Task<Subset<Links>> GetListAsync(string search, int skip, int take, string direction, string field)
        {
            return await _linksRepository.GetListAsync(search, skip, take, direction, field);
        }

        public Task InsertAsync(Links entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(int id, Links entity)
        {
            throw new NotImplementedException();
        }

        Task<Subset<Links>> ISubsetRetriever<Links, string>.GetListAsync(string search, int skip, int take, string direction, string field)
        {
            throw new NotImplementedException();
        }
    }
}
