using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThreadIt.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public bool is_salary { get; set; }
        public double? salary { get; set; }
        public double? pay_per_hour { get; set; }
        public int job_title_id { get; set; }
        public DateTime date_started { get; set; }
        public DateTime? date_ended { get; set; }
    }
}
