using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ThreadIt.DataAccess;
using ThreadIt.Models;

namespace ThreadIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly ClientStorage _storage;

        public ClientsController(IConfiguration config)
        {
            _storage = new ClientStorage(config);
        }

        [HttpGet]
        public IActionResult GetAllClients()
        {
            return Ok(_storage.GetAllClients());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleClient(int id)
        {
            return Ok(_storage.GetSingleClient(id));
        }

        [HttpPost]
        public IActionResult AddClient(Client client)
        {
            return Ok(_storage.AddClient(client));
        }

        [HttpPut("{id}")]
        public IActionResult UpdateClient(int id, Client client)
        {
            return Ok(_storage.UpdateClient(id, client));
        }
    }
}