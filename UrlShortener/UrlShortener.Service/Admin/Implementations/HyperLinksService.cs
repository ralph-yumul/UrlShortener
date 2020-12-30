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

        public async Task<IEnumerable<HyperLinks>> GetAllAsync()
        {
            return await _linksRepository.GetAllAsync();
        }

        public async Task<Subset<HyperLinks>> GetListAsync(string search, int skip, int take, string direction, string field)
        {
            return await _linksRepository.GetListAsync(search, skip, take, direction, field);
        }

        public async Task InsertAsync(HyperLinks hyperLinks)
        {
            await _linksRepository.InsertAsync(hyperLinks);
        }

        public Task UpdateAsync(int id, HyperLinks hyperLinks)
        {
            throw new NotImplementedException();
        }

        public async Task<HyperLinks> GetStringAsync(string shortLink)
        {
            return await _linksRepository.GetStringAsync(shortLink);
        }
    }
}
