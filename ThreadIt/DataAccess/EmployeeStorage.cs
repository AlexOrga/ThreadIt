using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using ThreadIt.Models;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace ThreadIt.DataAccess
{
    public class EmployeeStorage
    {
        private readonly string conString;

        public EmployeeStorage(IConfiguration config)
        {
            conString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Employee>(@"SELECT *
                                                          FROM employees");

                return result;
            }
        }

        public IEnumerable<Employee> GetSingleEmployee(int id)
        {
            using (var connection = new SqlConnection(conString))
            {
                connection.Open();

                var result = connection.Query<Employee>(@"SELECT * FROM employees WHERE employees.id = @id", new { id });

                return result;
            }
        }

        //public bool AddEmployee(Employee employee)
        //{
        //    using (var connection = new SqlConnection(conString))
        //    {
        //        connection.Open();
        //    }
        //}

        //public bool UpdateEmployee(int id, Employee employee)
        //{
        //    using (var connection = new SqlConnection(conString))
        //    {
        //        connection.Open();
        //    }
        //}
    }
}
