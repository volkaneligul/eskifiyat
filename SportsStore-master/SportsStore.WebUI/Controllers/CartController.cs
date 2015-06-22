using SportsStore.Domain.Abstract;
using SportsStore.Domain.Entities;
using SportsStore.WebUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SportsStore.WebUI.Controllers
{
    public class CartController : Controller
    {
        private IProductRepository repository;
        private IOrderRepository orderRepository;
        private IOrderProcessor orderProcessor;

        public CartController(IProductRepository repository, IOrderProcessor processor, IOrderRepository orderRepository)
        {
            this.repository = repository;
            this.orderRepository = orderRepository;
            orderProcessor = processor;
        }

        public ViewResult Index(Cart cart, string returnUrl)
        {
            return View(new CartIndexViewModel
            {
                Cart = cart,
                ReturnUrl = returnUrl
            });
        }

        public RedirectToRouteResult AddToCart(Cart cart, int productID, string returnUrl)
        {
            var product = repository.Products.FirstOrDefault(p => p.ProductID == productID);

            if (product != null)
            {
                cart.AddItem(product, 1);
            }

            return RedirectToAction("Index", new { returnUrl });
        }

        public RedirectToRouteResult RemoveFromCart(Cart cart, int productId, string returnUrl)
        {
            var product = repository.Products.FirstOrDefault(p => p.ProductID == productId);

            if (product != null)
            {
                cart.RemoveLine(product);
            }

            return RedirectToAction("Index", new { returnUrl });
        }

        public ViewResult Summary(Cart cart)
        {
            return View(cart);
        }

        public ViewResult Checkout()
        {
            return View(new ShippingDetails());
        }

        [HttpPost]
        public ViewResult Checkout(Cart cart, ShippingDetails shippingDetails)
        {
            if (cart.Lines.Count() == 0)
            {
                ModelState.AddModelError("", "Sorry, your cart is empty!");
            }

            if (ModelState.IsValid)
            {
                orderProcessor.ProcessOrder(cart, shippingDetails);

                string items = "";
                foreach (var line in cart.Lines)
                {
                    var subtotal = line.Product.Price * line.Quantity;
                    items += string.Format("[{0} x {1} (subtotal: {2:c})]",
                        line.Quantity, line.Product.Name, subtotal);
                }

                var order = new Order();
                order.OrderShipToName = shippingDetails.Name;
                order.OrderShipToAddressLine1 = shippingDetails.Line1;
                order.OrderShipToAddressLine2 = shippingDetails.Line2;
                order.OrderShipToAddressLine3 = shippingDetails.Line3;
                order.OrderShipToAddressState = shippingDetails.State;
                order.OrderShipToCity = shippingDetails.City;
                order.OrderShipToCountry = shippingDetails.Country;
                order.OrderShipToZip = shippingDetails.Zip;
                order.OrderGiftWrap = shippingDetails.GiftWrap;
                order.OrderItem = items;

                orderRepository.SaveOrder(order);


                cart.Clear();
                return View("Completed");
            }

            return View(shippingDetails);
        }

    }
}