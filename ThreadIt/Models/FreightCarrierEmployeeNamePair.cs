using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class FreightCarrierEmployeeNamePair
    {
        public int id { get; set; }
        public int freight_carrier_id { get; set; }
        public string name { get; set; }
        public string telephone_number { get; set; }
        public string email { get; set; }
        public string comments { get; set; }
    }
}
