using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        public readonly Mediatory _mediatory;
        public CustomersController(Mediatory mediatory)
        {
            _mediatory = mediatory;
        }

        [HttpGet("GetAllCustomers")]
        public List<Customermodel> GetAllCustomers()
        { 
            List<Customermodel> lstCustomers= new List<Customermodel>();
            lstCustomers = _mediatory.GetAllCustomers();
            return lstCustomers;

        }
        [HttpGet("GetCustomerdetailsbyID")]
        public List<Customermodel> GetCustomerdetailsbyID(int iCustomerId)
        {
            List<Customermodel> lstCustomers = new List<Customermodel>();
            lstCustomers = _mediatory.GetCustomerdetailsbyID(iCustomerId);
            return lstCustomers;

        }
    }
}
