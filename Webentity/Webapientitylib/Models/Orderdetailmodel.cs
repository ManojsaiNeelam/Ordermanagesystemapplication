using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webapientitylib.Models
{
    public class Orderdetailmodel
    {
        public int OrderDetailId { get; set; }

        public int? OrderId { get; set; }

        public int? ProductId { get; set; }

        public int? Quantity { get; set; }
    }
}
