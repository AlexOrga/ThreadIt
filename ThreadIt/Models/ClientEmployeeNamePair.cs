using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class ClientEmployeeNamePair
    {
        public int id { get; set; }
        public int client_id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string telephone_number { get; set; }
        public string comments { get; set; }
    }
}
