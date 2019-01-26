using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class OrderQuoteProductPair
    {
        public int id { get; set; }
        public int? order_id { get; set; }
        public int? quote_id { get; set; }
        public int product_id { get; set; }
        public int quantity { get; set; }
        public double cost_per_item { get; set; }
        public double price_per_item { get; set; }
        public bool is_order { get; set; }
    }
}
