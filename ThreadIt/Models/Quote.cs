using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class Quote
    {
        public int id { get; set; }
        public int salesman_id { get; set; }
        public int client_id { get; set; }
        public int client_id_of_purchaser { get; set; }
        public string shipping_address { get; set; }
        public int freight_carrier_id { get; set; }
        public string fob { get; set; }
        public DateTime date_created { get; set; }
        public int delivery_time_in_days { get; set; }
        public double total_cost { get; set; }
        public double total_price { get; set; }
        public string comments { get; set; }
    }
}
