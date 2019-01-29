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

        public bool AddClient(Client client)
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Execute(@"INSERT INTO clients (
                                                    [name], [address], [telephone_number], 
                                                    [fax_number], [cod], [comments]
                                                    )
                                                    VALUES (
                                                    @name, @address, @telephone_number,
                                                    @fax_number, @cod, @comments
                                                    )", client);

                return result == 1;
            }
        }

        public bool UpdateClient(int id, Client client)
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Execute(@"UPDATE clients 
                                                  SET
                                                  [name] = @name, 
                                                  [address] = @address, 
                                                  [telephone_number] = @telephone_number, 
                                                  [fax_number] = @fax_number, 
                                                  [cod] = @cod, 
                                                  [comments] = @comments
                                                  WHERE clients.id = @id",
                                                  new
                                                  {
                                                      id,
                                                      name = client.name,
                                                      address = client.address,
                                                      telephone_number = client.telephone_number,
                                                      fax_number = client.fax_number,
                                                      cod = client.cod,
                                                      comments = client.comments
                                                  });

                return result == 1;
            }
        }
    }
}
