using EatSilogAvenue.Core;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UrlShortener.Entity.Admin;
using UrlShortener.Repository.Admin.Interfaces;
using UrlShortener.Repository.ORM;

namespace UrlShortener.Repository.Admin.Implementations
{
    public class LinksRepository : DapperRepository, ILinksRepository
    {
        #region Constructor
        public LinksRepository(IConfiguration configuration) 
            : base(configuration)
        {
        }
        #endregion

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
            return await QueryMultipleAsync<Links>("Admin.AllLinks_Get");
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
