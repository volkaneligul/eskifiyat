(function() {
    "use strict";

    var DeliveryBuilder = function() {
        var shippingAddress = new HB.AddressItemBuilder().build();
        var billingAddress = new HB.AddressItemBuilder().id("e6205ebf-4ceb-48e2-b5c3-2fa5548e1157").typeCode(2).build();
        var shippingItem = new HB.ShippingItemBuilder().build();

        var _addressItemList = [shippingAddress, billingAddress];
        var _cbpProductSKU = null;
        var _hasCbpProduct = false;
        var _requireCitizenId = false;
        var _shippingMethods = {
            allAdditionalCargoProduct: false,
            excludeMessage: null,
            nonExportProductList: [],
            nonExportProductMessage: null,
            shippingItemList: [shippingItem],
            shippingMessage: null
        };
        var _isInvoiceSentWithOrderAvailable = true;

        var addressItemList = function(param) {
            var __addressItemList = [];

            for (var i = 0; i < arguments.length; i++) {
                __addressItemList.push(arguments[i]);
            };

            _addressItemList = __addressItemList;
            return this;
        };

        var addAddressItem = function(param) {
            _addressItemList.push(param);
            return this;
        };

        var cbpProductSKU = function(param) {
            _cbpProductSKU = param;
            return this;
        };

        var hasCbpProduct = function(param) {
            _hasCbpProduct = param;
            return this;
        };

        var requireCitizenId = function(param) {
            _requireCitizenId = param;
            return this;
        };

        var shippingMethods = function(param) {
            _shippingMethods = param;
            return this;
        };

        var shippingAddressTown = function(param) {
            _addressItemList[0].town = param;
            return this;
        };

        var billingAddressTown = function(param) {
            _addressItemList[1].town = param;
            return this;
        };

        var nonExportProductList = function() {
            var _nonExportProductList = [];

            for (var i = 0; i < arguments.length; i++) {
                _nonExportProductList.push(arguments[i]);
            };

            _shippingMethods.nonExportProductList = _nonExportProductList;
            return this;
        };

        var shippingItemList = function(param) {
            var _shippingItemList = [];

            for (var i = 0; i < arguments.length; i++) {
                _shippingItemList.push(arguments[i]);
            };

            _shippingMethods.shippingItemList = _shippingItemList;
            return this;
        };

        var isInvoiceSentWithOrderAvailable = function(param) {
            _isInvoiceSentWithOrderAvailable = param;
            return this;
        };

        var build = function() {
            return {
                addressItemList: _addressItemList,
                cbpProductSKU: _cbpProductSKU,
                hasCbpProduct: _hasCbpProduct,
                requireCitizenId: _requireCitizenId,
                shippingMethods: _shippingMethods,
                isInvoiceSentWithOrderAvailable: _isInvoiceSentWithOrderAvailable
            };
        };

        return {
            addressItemList: addressItemList,
            addAddressItem: addAddressItem,
            cbpProductSKU: cbpProductSKU,
            hasCbpProduct: hasCbpProduct,
            requireCitizenId: requireCitizenId,
            isInvoiceSentWithOrderAvailable: isInvoiceSentWithOrderAvailable,
            shippingMethods: shippingMethods,
            shippingAddressTown: shippingAddressTown,
            billingAddressTown: billingAddressTown,
            nonExportProductList: nonExportProductList,
            shippingItemList: shippingItemList,
            build: build
        };
    };

    HB.DeliveryBuilder = DeliveryBuilder;
})();
