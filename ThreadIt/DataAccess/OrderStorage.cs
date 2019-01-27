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

                var result = connection.Query<Order>(@"SELECT * FROM orders");

                return result;
            }
        }

        public IEnumerable<Order> GetSingleOrder(int id)
        {
            using(var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Order>(@"SELECT * FROM orders WHERE orders.id = @id", new { id });

                return result;
            }
        }

        public bool AddOrder(Order order)
        {
            using(var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Execute(@"INSERT INTO orders (
                                                    [purchase_order], [quote_number], [salesman_id], [client_id], 
                                                    [client_id_of_purchaser], [billing_address], [shipping_address], 
                                                    [freight_carrier_id], [fob], [date_created], [date_will_ship], 
                                                    [date_shipped], [tracking_number], [status_number], [is_paid], 
                                                    [payment_type], [is_cancelled], [is_on_hold], [comments]
                                                )
                                                VALUES (
                                                    @purchase_order, @quote_number, @salesman_id, @client_id, @client_id_of_purchaser, 
                                                    @billing_address, @shipping_address, @freight_carrier_id, @fob, 
                                                    @date_created, @date_will_ship, @date_shipped, @tracking_number, @status_number, 
                                                    @is_paid, @payment_type, @is_cancelled, @is_on_hold, @comments
                                                )", order
                                                );

                return result == 1;
            }
        }
    }
}
