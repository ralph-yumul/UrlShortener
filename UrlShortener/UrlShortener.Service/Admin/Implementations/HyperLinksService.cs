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
    public class HyperLinksService : IHyperLinksService
    {
        private readonly IHyperLinksRepository _linksRepository;
        public HyperLinksService(IHyperLinksRepository linksRepository)
        {
            _linksRepository = linksRepository;
        }
        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<HyperLinks> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<HyperLinks>> GetListAsync()
        {
            return await _linksRepository.GetListAsync();
        }

        public async Task<Subset<HyperLinks>> GetListAsync(string search, int skip, int take, string direction, string field)
        {
            return await _linksRepository.GetListAsync(search, skip, take, direction, field);
        }

        public Task InsertAsync(HyperLinks entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(int id, HyperLinks entity)
        {
            throw new NotImplementedException();
        }

        Task<Subset<HyperLinks>> ISubsetRetriever<HyperLinks, string>.GetListAsync(string search, int skip, int take, string direction, string field)
        {
            throw new NotImplementedException();
        }
    }
}
