using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webapientitylib.Models
{
    public class Productmodel
    {
        public int ProductId { get; set; }

        public string? ProductName { get; set; }

        public int? SupplierId { get; set; }

        public int? CategoryId { get; set; }

        public string? Unit { get; set; }

        public string? Price { get; set; }
    }
}
