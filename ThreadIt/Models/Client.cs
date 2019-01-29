using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class Client
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string telephone_number { get; set; }
        public string fax_number { get; set; }
        public bool cod { get; set; }
        public string comments { get; set; }
    }
}
