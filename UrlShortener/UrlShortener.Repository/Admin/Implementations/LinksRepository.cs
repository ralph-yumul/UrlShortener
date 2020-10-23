using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using UrlShortener.Core;
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

        public async Task<Subset<Links>> GetListAsync(string search, int skip, int take, string direction, string field)
        {
            var dynamicParameters = new DynamicParameters();

            dynamicParameters.Add("SearchString", search, direction: ParameterDirection.Input);
            dynamicParameters.Add("Skip", skip, direction: ParameterDirection.Input);
            dynamicParameters.Add("Take", take, direction: ParameterDirection.Input);
            dynamicParameters.Add("Direction", direction, direction: ParameterDirection.Input);
            dynamicParameters.Add("Field", field, direction: ParameterDirection.Input);
            dynamicParameters.Add("Count", DbType.Int32, direction: ParameterDirection.Output);

            var list = await QueryMultipleAsync<Links>("Admin.Links_Get", dynamicParameters);

            var totalCount = dynamicParameters.Get<int>("Count");

            return new Subset<Links>(list, totalCount);
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
