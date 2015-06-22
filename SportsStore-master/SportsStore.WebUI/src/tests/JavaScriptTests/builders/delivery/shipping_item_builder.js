(function() {
    "use strict";

    var ShippingItemBuilder = function() {
        var _internalId = 1;
        var _isDefault = true;
        var _shippingMethodDescription = "<strong>Yurtiçi Kargo</strong> güvencesiyle, siparişin en kısa sürede elinde.";
        var _shippingMethodName = "Yurtiçi Kargo";
        var _shippingTotalPrice = "4,93";
        var _specialDeliveryId = 0;

        var internalId = function(param) {
            _internalId = param;
            return this;
        };

        var isDefault = function(param) {
            _isDefault = param;
            return this;
        };

        var shippingMethodDescription = function(param) {
            _shippingMethodDescription = param;
            return this;
        };

        var shippingMethodName = function(param) {
            _shippingMethodName = param;
            return this;
        };

        var shippingTotalPrice = function(param) {
            _shippingTotalPrice = param;
            return this;
        };

        var specialDeliveryId = function(param) {
            _specialDeliveryId = param;
            return this;
        };

        var build = function() {
            return {
                internalId: _internalId,
                isDefault: _isDefault,
                shippingMethodDescription: _shippingMethodDescription,
                shippingMethodName: _shippingMethodName,
                shippingTotalPrice: _shippingTotalPrice,
                specialDeliveryId: _specialDeliveryId
            };
        };

        return {
            internalId: internalId,
            isDefault: isDefault,
            shippingMethodDescription: shippingMethodDescription,
            shippingMethodName: shippingMethodName,
            shippingTotalPrice: shippingTotalPrice,
            specialDeliveryId: specialDeliveryId,
            build: build
        };
    };

    HB.ShippingItemBuilder = ShippingItemBuilder;
})();
