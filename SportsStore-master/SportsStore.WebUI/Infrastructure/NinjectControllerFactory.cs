﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ninject;
using System.Web.Mvc;
using Moq;
using SportsStore.Domain.Abstract;
using SportsStore.Domain.Entities;
using SportsStore.Domain.Concrete;
using System.Configuration;
using SportsStore.WebUI.Infrastructure.Abstract;
using SportsStore.WebUI.Infrastructure.Concrete;

namespace SportsStore.WebUI.Infrastructure
{
    public class NinjectControllerFactory : DefaultControllerFactory
    {
        private IKernel ninjectKernel;

        public NinjectControllerFactory()
        {
            ninjectKernel = new StandardKernel();
            addBindings();
        }

        protected override IController GetControllerInstance(System.Web.Routing.RequestContext requestContext, Type controllerType)
        {
            return controllerType == null ? null : (IController)ninjectKernel.Get(controllerType);
        }
        private void addBindings()
        {
            ninjectKernel.Bind<IProductRepository>().To<EFProductRepository>();

            ninjectKernel.Bind<IOrderRepository>().To<EFOrderRepository>();

            ninjectKernel.Bind<IOrderProcessor>().To<NullOrderProcessor>();

            ninjectKernel.Bind<IAuthProvider>().To<FormsAuthProvider>();
        }
    }
}