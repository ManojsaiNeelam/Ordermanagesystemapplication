using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapientitylib;
using Webapientitylib.Models;

namespace Webentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        public readonly Mediatory _mediatory;
        public EmployeesController(Mediatory mediatory)
        {
            _mediatory = mediatory;
        }

        [HttpGet("GetAllEmployees")]
        public List<Employeemodel> GetAllEmployees()
        {
            List<Employeemodel> lstEmployee=new List<Employeemodel>();
            lstEmployee=_mediatory.GetAllEmployees();
            return lstEmployee;
        }
        [HttpGet("GetEmployeedetailsbyId")]

        public List<Employeemodel> GetEmployeedetailsbyId(int iEmployeeId)
        {
            List<Employeemodel> lstEmployee = new List<Employeemodel>();
            lstEmployee = _mediatory.GetEmployeedetailsbyId(iEmployeeId);
            return lstEmployee;
        }
        




    }
}
