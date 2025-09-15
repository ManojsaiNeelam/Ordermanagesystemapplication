using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        public readonly Mediatory _mediatory;
        public OrdersController(Mediatory mediatory)
        {
            _mediatory = mediatory;
        }


        [HttpGet("GetAllOrders")]
        public List<Ordermodel> GetAllOrders()
        {
            List<Ordermodel> lstorders = new List<Ordermodel>();
            lstorders = _mediatory.GetAllOrders();
            return lstorders;

        }
        [HttpGet("GetOrdersbyId")]
        public List<Ordermodel> GetOrdersbyId(int iOrderId)
        {
            List<Ordermodel> lstorders = new List<Ordermodel>();
            lstorders = _mediatory.GetOrdersbyId(iOrderId);
            return lstorders;

        }
    }
}
