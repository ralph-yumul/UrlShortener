using EatSilogAvenue.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UrlShortener.Entity.Admin;
using UrlShortener.Repository.Admin.Interfaces;
using UrlShortener.Service.Admin.Interfaces;

namespace UrlShortener.Service.Admin.Implementations
{
    class LinksService : ILinksService
    {
        private ILinksRepository _linksRepository { get; }
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

        public Task<Subset<Links>> GetListAsync(string search, int skip, int take, string direction, string field)
        {
            throw new NotImplementedException();
        }

        public Task InsertAsync(Links entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(int id, Links entity)
        {
            throw new NotImplementedException();
        }
    }
}
