﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace SportsStore.Domain.Entities
{
    public class Product
    {
        /*
         * See ch 16 to move attributes to another class that MVC can find
         */

        [HiddenInput(DisplayValue=false)]
        public int ProductID { get; set; }

        [Required(ErrorMessage="Please enter a product name")]
        public string Name { get; set; }

        [Required(ErrorMessage="Please enter a description")]
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage="Pleaes enter a positive price")]
        public decimal Price { get; set; }

        [Required(ErrorMessage="Please specify a category")]
        public string Category { get; set; }

        public byte[] ImageData { get; set; }

        [HiddenInput(DisplayValue=false)]
        public string ImageMimeType { get; set; }

        [Required(ErrorMessage = "Please enter a stock amount")]
        public int StockAmount { get; set; }

        public bool IsActive { get; set; }
    }
}
