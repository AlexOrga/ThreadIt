using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThreadIt.Models;
using Dapper;
using System.Data.SqlClient;

namespace ThreadIt.DataAccess
{
    public class OrderStorage
    {
        private readonly string conString;

        public OrderStorage(IConfiguration config)
        {
            conString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Order> GetAllOrders()
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Order>(@"Select * FROM orders");

                return result;
            }
        }

        public IEnumerable<Order> GetSingleOrder(int id)
        {
            using(var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Order>(@"Select * From orders Where orders.id = @id", new { id });

                return result;
            }
        }
    }
}
