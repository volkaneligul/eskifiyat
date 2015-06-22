(function() {
    "use strict";

    var AddressItemBuilder = function() {
        var _address = "asdasd ";
        var _addressName = "asda";
        var _billingTypeCode = 1;
        var _town = "Beylikdüzü";
        var _city = "İstanbul";
        var _countryName = "Türkiye";
        var _firstName = "Sevil";
        var _hasCitizenId = false;
        var _id = "2b992963-47c8-49ef-a4a8-40ab0264a64e";
        var _isDefault = true;
        var _lastName = "YILMAZ";
        var _phoneNumber = "05455555555";
        var _typeCode = 1;

        var address = function(param) {
            _address = param;
            return this;
        };

        var addressName = function(param) {
            _addressName = param;
            return this;
        };

        var billingTypeCode = function(param) {
            _billingTypeCode = param;
            return this;
        };

        var town = function(param) {
            _town = param;
            return this;
        };

        var city = function(param) {
            _city = param;
            return this;
        };

        var countryName = function(param) {
            _countryName = param;
            return this;
        };

        var firstName = function(param) {
            _firstName = param;
            return this;
        };

        var hasCitizenId = function(param) {
            _hasCitizenId = param;
            return this;
        };

        var id = function(param) {
            _id = param;
            return this;
        };

        var isDefault = function(param) {
            _isDefault = param;
            return this;
        };

        var lastName = function(param) {
            _lastName = param;
            return this;
        };

        var phoneNumber = function(param) {
            _phoneNumber = param;
            return this;
        };

        var typeCode = function(param) {
            _typeCode = param;
            return this;
        };

        var build = function() {
            return {
                address: _address,
                addressName: _addressName,
                billingTypeCode: _billingTypeCode,
                town: _town,
                city: _city,
                countryName: _countryName,
                firstName: _firstName,
                hasCitizenId: _hasCitizenId,
                id: _id,
                isDefault: _isDefault,
                lastName: _lastName,
                phoneNumber: _phoneNumber,
                typeCode: _typeCode
            };
        };

        return {
            address: address,
            addressName: addressName,
            billingTypeCode: billingTypeCode,
            town: town,
            city: city,
            countryName: countryName,
            firstName: firstName,
            hasCitizenId: hasCitizenId,
            id: id,
            isDefault: isDefault,
            lastName: lastName,
            phoneNumber: phoneNumber,
            typeCode: typeCode,
            build: build
        };
    };

    HB.AddressItemBuilder = AddressItemBuilder;
})();
