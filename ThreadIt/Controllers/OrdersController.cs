using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThreadIt.DataAccess;
using ThreadIt.Models;
using Microsoft.Extensions.Configuration;

namespace ThreadIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly OrderStorage _storage;

        public OrdersController(IConfiguration config)
        {
            _storage = new OrderStorage(config);
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            return Ok(_storage.GetAllOrders());
        }

        [HttpGet("{id}")]
        public IActionResult GetOrderById(int id)
        {
            return Ok(_storage.GetSingleOrder(id));
        }

        [HttpPost]
        public IActionResult AddNewOrder(Order order)
        {
            return Ok(_storage.AddOrder(order));
        }
    }
}