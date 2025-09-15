using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        public readonly Mediatory _mediatory;
        public CategoriesController(Mediatory mediatory)
        {
            _mediatory = mediatory;
        }

        [HttpGet("GetAllCategories")]
        public List<Categorymodel> GetAllCategories()
        {
            List<Categorymodel> lstCategories = new List<Categorymodel>();
            lstCategories = _mediatory.GetAllCategories();
                return lstCategories;
        }
        [HttpGet("GetCategorydetailsbyId")]
        public List<Categorymodel> GetCategorydetailsbyId(int iCategoryId)
        {
            List<Categorymodel> lstCategories = new List<Categorymodel>();
            lstCategories = _mediatory.GetCategorydetailsbyId(iCategoryId);
            return lstCategories;
        }
      
    }
}
