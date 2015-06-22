(function() {
    "use strict";

    var CartBuilder = function() {
        var _id = 15136025;
        var _totalPrice = "265,70";
        var _totalTax = "40,53";
        var _isCorporateAccount = false;
        var _blockContinue = false;
        var _isGiftBoxSelected = false;
        var _isGiftBoxOptionRestricted = false;
        var _itemList = [];

        var id = function(param) {
            _id = param;
            return this;
        };

        var totalPrice = function(param) {
            _totalPrice = param;
            return this;
        };

        var totalTax = function(param) {
            _totalTax = param;
            return this;
        };

        var isCorporateAccount = function(param) {
            _isCorporateAccount = param;
            return this;
        };

        var blockContinue = function(param) {
            _blockContinue = param;
            return this;
        };

        var isGiftBoxSelected = function(param) {
            _isGiftBoxSelected = param;
            return this;
        };

        var isGiftBoxOptionRestricted = function(param) {
            _isGiftBoxOptionRestricted = param;
            return this;
        };

        var itemList = function(param) {
            var __itemList = [];

            for (var i = 0; i < arguments.length; i++) {
                __itemList.push(arguments[i]);
            };

            _itemList = __itemList;
            return this;
        };

        var build = function() {
            return {
                id: _id,
                totalPrice: _totalPrice,
                totalTax: _totalTax,
                isCorporateAccount: _isCorporateAccount,
                blockContinue: _blockContinue,
                isGiftBoxSelected: _isGiftBoxSelected,
                isGiftBoxOptionRestricted: _isGiftBoxOptionRestricted,
                itemList: _itemList
            };
        };

        return {
            id: id,
            totalPrice: totalPrice,
            totalTax: totalTax,
            isCorporateAccount: isCorporateAccount,
            blockContinue: blockContinue,
            isGiftBoxSelected: isGiftBoxSelected,
            isGiftBoxOptionRestricted: isGiftBoxOptionRestricted,
            itemList: itemList,
            build: build
        };
    };

    HB.CartBuilder = CartBuilder;
})();
