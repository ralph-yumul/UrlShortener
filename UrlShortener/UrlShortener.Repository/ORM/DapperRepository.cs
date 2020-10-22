using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace UrlShortener.Repository.ORM
{
    public class DapperRepository
    {
        private readonly IConfiguration _configuration;

        public DapperRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(_configuration.GetConnectionString("UrlShortenerDbContext"));
            }
        }

        protected async Task ExecuteAsync(string storedProcedureName)
        {
            await ExecuteAsync(storedProcedureName, null);
        }

        protected async Task ExecuteAsync(string storedProcedureName, object parameters)
        {
            using (var connection = Connection)
            {
                await connection.ExecuteAsync(
                    storedProcedureName,
                    parameters,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        protected async Task<IEnumerable<T>> QueryMultipleAsync<T>(string storedProcedureName)
        {
            return await QueryMultipleAsync<T>(storedProcedureName, null);
        }

        protected async Task<IEnumerable<T>> QueryMultipleAsync<T>(string storedProcedureName, object parameters)
        {
            using (var connection = Connection)
            {
                return await connection.QueryAsync<T>(
                    storedProcedureName,
                    parameters,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        protected async Task<T> QuerySingleAsync<T>(string storedProcedureName, object parameters)
        {
            using (var connection = Connection)
            {
                return await connection.QueryFirstOrDefaultAsync<T>(
                    storedProcedureName,
                    parameters,
                    commandType: CommandType.StoredProcedure
                );
            }
        }
    }
}
