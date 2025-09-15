using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        
        public readonly Mediatory _mediatory;
        public SuppliersController(Mediatory mediatory) 
        {
            _mediatory = mediatory;
        }

        [HttpGet("GetAllSuppliers")]
        public List<Suppliermodel> GetAllSuppliers()
        {
            List<Suppliermodel> lstsuppliers = new List<Suppliermodel>();
            lstsuppliers = _mediatory.GetAllSuppliers();
            return lstsuppliers;
        }
        [HttpGet("GetSupplierDetailsbyID")]

        public  List<Suppliermodel> GetSupplierDetailsbyID(int iSupplierID)
        {
            List<Suppliermodel> lstsuppliers = new List<Suppliermodel>();
            lstsuppliers = _mediatory.GetSupplierDetailsbyID(iSupplierID);
            return lstsuppliers;
        }
    }
}
