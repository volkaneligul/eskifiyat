using SportsStore.Domain.Abstract;
using SportsStore.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Domain.Concrete
{
    public class EFOrderRepository : IOrderRepository
    {
        private EFDbContext context = new EFDbContext();

        public IQueryable<Order> Orders
        {
            get { return context.Orders; }
        }

        public void SaveOrder(Order Order)
        {
            if (Order.OrderID == 0)
            {
                context.Orders.Add(Order);
            }
            else
            {
                context.Entry(Order).State = EntityState.Modified;
            }
            context.SaveChanges();
        }

        public void DeleteOrder(Order Order)
        {
            context.Orders.Remove(Order);
            context.SaveChanges();
        }
    }
}
