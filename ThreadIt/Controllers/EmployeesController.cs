using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThreadIt.Models;
using ThreadIt.DataAccess;
using Microsoft.Extensions.Configuration;

namespace ThreadIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeStorage _storage;

        public EmployeesController(IConfiguration config)
        {
            _storage = new EmployeeStorage(config);
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            return Ok(_storage.GetAllEmployees());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleEmployee(int id)
        {
            return Ok(_storage.GetSingleEmployee(id));
        }
    }
}