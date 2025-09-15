using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public readonly Mediatory _mediatory;
        public ProductsController(Mediatory mediatory)
        {
            _mediatory = mediatory;
        }

        [HttpGet("GetAllProducts")]
        public List<Productmodel> GetAllProducts()
        {
            {
                List<Productmodel> lstProducts = new List<Productmodel>();
                lstProducts = _mediatory.GetAllProducts();
                return lstProducts;
            }
        }
        [HttpGet("GetProductsbyId")]
        public List<Productmodel> GetProductsbyID(int iProductID)
        {
            List<Productmodel> lstProducts = new List<Productmodel>();
            lstProducts = _mediatory.GetProductsbyId(iProductID);
            return lstProducts;
        }
    }
}