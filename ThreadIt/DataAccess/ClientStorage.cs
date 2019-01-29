using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using ThreadIt.Models;
using System.Data.SqlClient;

namespace ThreadIt.DataAccess
{
    public class ClientStorage
    {
        public readonly string conString;

        public ClientStorage(IConfiguration config)
        {
            conString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Client> GetAllClients()
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Client>(@"SELECT *
                                                        FROM clients
                                                        ORDER BY clients.name");

                return result;
            }
        }

        public IEnumerable<Client> GetSingleClient(int id)
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Client>(@"SELECT *
                                                        FROM clients
                                                        WHERE clients.id = @id", new { id });

                return result;
            }
        }
    }
}
