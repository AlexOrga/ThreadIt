using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class Order
    {
        public int id { get; set; }
        public string purchase_order { get; set; }
        public int? quote_number { get; set; }
        public int salesman_id { get; set; }
        public int client_id { get; set; }
        public int client_id_of_purchaser { get; set; }
        public string billing_address { get; set; }
        public string shipping_address { get; set; }
        public int freight_carrier_id { get; set; }
        public string fob { get; set; }
        public DateTime date_created { get; set; }
        public DateTime date_will_ship { get; set; }
        public DateTime? date_shipped { get; set; }
        public string tracking_number { get; set; } //Non-nullable type (if no tracking number then put 'None' or '')
        public int status_number { get; set; }
        public bool is_paid { get; set; }
        public string payment_type { get; set; }
        public bool is_cancelled { get; set; }
        public bool is_on_hold { get; set; }
        public string comments { get; set; }
    }
}
