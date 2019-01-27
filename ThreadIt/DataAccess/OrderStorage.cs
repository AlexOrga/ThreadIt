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

        public bool UpdateOrder(int id, Order order)
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Execute(@"UPDATE orders
                                                SET 
                                                [purchase_order] = @purchase_order,
                                                [quote_number] = @quote_number, 
                                                [salesman_id] = @salesman_id, 
                                                [client_id] = @client_id, 
                                                [client_id_of_purchaser] = @client_id_of_purchaser, 
                                                [billing_address] = @billing_address, 
                                                [shipping_address] = @shipping_address, 
                                                [freight_carrier_id] = @freight_carrier_id, 
                                                [fob] = @fob, 
                                                [date_created] = @date_created, 
                                                [date_will_ship] = @date_will_ship, 
                                                [date_shipped] = @date_shipped, 
                                                [tracking_number] = @tracking_number, 
                                                [status_number] = @status_number, 
                                                [is_paid] = @is_paid, 
                                                [payment_type] = @payment_type, 
                                                [is_cancelled] = @is_cancelled, 
                                                [is_on_hold] = @is_on_hold, 
                                                [comments] = @comments
                                                WHERE orders.id = @id",
                                                new
                                                {
                                                    id,
                                                    purchase_order = order.purchase_order,
                                                    quote_number = order.quote_number,
                                                    salesman_id = order.salesman_id,
                                                    client_id = order.client_id,
                                                    client_id_of_purchaser = order.client_id_of_purchaser,
                                                    billing_address = order.billing_address,
                                                    shipping_address = order.shipping_address,
                                                    freight_carrier_id = order.freight_carrier_id,
                                                    fob = order.fob,
                                                    date_created = order.date_created,
                                                    date_will_ship = order.date_will_ship,
                                                    date_shipped = order.date_shipped,
                                                    tracking_number = order.tracking_number,
                                                    status_number = order.status_number,
                                                    is_paid = order.is_paid,
                                                    payment_type = order.payment_type,
                                                    is_cancelled = order.is_cancelled,
                                                    is_on_hold = order.is_on_hold,
                                                    comments = order.comments
                                                }
                                                );

                return result == 1;
            }
        }
    }
}
