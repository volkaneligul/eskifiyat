using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace SportsStore.Domain.Entities
{
    public class Order
    {
        public int OrderID { get; set; }

        public string OrderItem { get; set; }

        public string OrderShipToName { get; set; }

        public string OrderShipToAddressLine1 { get; set; }
        public string OrderShipToAddressLine2 { get; set; }
        public string OrderShipToAddressLine3 { get; set; }
        public string OrderShipToCity { get; set; }
        public string OrderShipToAddressState { get; set; }
        public string OrderShipToZip { get; set; }
        public string OrderShipToCountry { get; set; }
        public bool OrderGiftWrap { get; set; }

    }
}
