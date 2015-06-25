﻿using System.Web;
using System.Web.Optimization;

namespace SportsStore.WebUI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new StyleBundle("~/css/global").Include(
                        "~/src/Web/assets/css/global.css"));

            bundles.Add(new StyleBundle("~/css/global-checkout").Include(
                        "~/src/Web/assets/css/global-checkout.css"));

            //bundles.Add(new StyleBundle("~/bundles/style").Include(
            //            "~/Content/style.css"));

            bundles.Add(new StyleBundle("~/bundles/admin-style").Include(
                "~/Content/admin.css"));

            bundles.Add(new ScriptBundle("~/bundles/admin-scripts").Include(
                "~/Scripts/jquery-2.1.1.js",
                "~/Scripts/jquery.validate.js",
                "~/Scripts/jquery.validate.unobtrusive.js"));


            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
