using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippersController : ControllerBase
    {
       //Dependency Injection
        public readonly Mediatory _mediatory;
        public ShippersController(Mediatory mediatory) //Parameterised constructor
        { 
            _mediatory = mediatory;
        }
       
        
        [HttpGet("GetAllShippers")]
        public List<Shippermodel> GetAllShippers()
        {
            List < Shippermodel > lstshippers=new List<Shippermodel>();
            lstshippers= _mediatory.GetAllShippers();
            return  lstshippers;
        }
        [HttpGet("GetShipperDetailsById")]
        public List<Shippermodel> GetShipperDetailsById(int iShipperId)
        {
            List<Shippermodel> lstshippers = new List<Shippermodel>();
            lstshippers = _mediatory.GetShipperDetailsById(iShipperId);
            return lstshippers;
        }

    }
}
