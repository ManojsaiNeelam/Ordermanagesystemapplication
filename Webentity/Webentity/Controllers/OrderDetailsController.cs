using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailsController : ControllerBase
    {
        public readonly Mediatory _mediatory;
        public OrderDetailsController(Mediatory mediatory)
        {
            _mediatory = mediatory;
        }


        [HttpGet("GetALlOrderdetails")]
        public List<Orderdetailmodel> GetAllOrderDetails()
        {
            List<Orderdetailmodel> lstOrderdetails = new List<Orderdetailmodel>();
            lstOrderdetails = _mediatory.GetAllOrderdetails();
            return lstOrderdetails;
        }
        [HttpGet("GetOrderdetailsbyId")]
        public List<Orderdetailmodel> GetOrderdetailsbyId(int iOrderdetailId)
        {
            List<Orderdetailmodel> lstOrderdetails = new List<Orderdetailmodel>();
            lstOrderdetails = _mediatory.GetOrderdetailbyId(iOrderdetailId);
            return lstOrderdetails;
        }

    }
}
