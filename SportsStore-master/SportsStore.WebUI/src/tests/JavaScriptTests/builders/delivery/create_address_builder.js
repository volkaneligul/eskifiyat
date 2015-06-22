(function() {
    "use strict";

    var CreateAddressBuilder = function() {
        var _addressType = 1;
        var _addressName = null;
        var _firstName = null;
        var _lastName = null;
        var _addressLine1 = null;
        var _zipCode = null;
        var _phoneNumber = null;
        var _billingType = 1;
        var _companyName = null;
        var _taxOffice = null;
        var _taxNumber = null;
        var _citizenId = null;
        var _nationality = 0;
        var _countryName = null;
        var _cityName = "";
        var _townName = "";
        var _countries = [{
            "id": 281,
            "countryCode": "TN",
            "name": "Tunus",
            "isSelected": false
        }, {
            "id": 287,
            "countryCode": "TUR",
            "name": "Türkiye",
            "isSelected": true
        }, {
            "id": 280,
            "countryCode": "TM",
            "name": "Türkmenistan",
            "isSelected": false
        }];
        var _cities = [{
            "id": 136,
            "cityCode": "33",
            "name": "İçel",
            "isSelected": false
        }, {
            "id": 137,
            "cityCode": "34",
            "name": "İstanbul",
            "isSelected": false
        }, {
            "id": 138,
            "cityCode": "35",
            "name": "İzmir",
            "isSelected": false
        }];
        var _towns = [];
        var _districts = [];


        var addressType = function(param) {
            _addressType = param;
            return this;
        };

        var addressName = function(param) {
            _addressName = param;
            return this;
        };

        var firstName = function(param) {
            _firstName = param;
            return this;
        };

        var lastName = function(param) {
            _lastName = param;
            return this;
        };

        var addressLine1 = function(param) {
            _addressLine1 = param;
            return this;
        };

        var zipCode = function(param) {
            _zipCode = param;
            return this;
        };

        var phoneNumber = function(param) {
            _phoneNumber = param;
            return this;
        };

        var billingType = function(param) {
            _billingType = param;
            return this;
        };

        var companyName = function(param) {
            _companyName = param;
            return this;
        };

        var taxOffice = function(param) {
            _taxOffice = param;
            return this;
        };

        var taxNumber = function(param) {
            _taxNumber = param;
            return this;
        };

        var citizenId = function(param) {
            _citizenId = param;
            return this;
        };

        var nationality = function(param) {
            _nationality = param;
            return this;
        };

        var countryName = function(param) {
            _countryName = param;
            return this;
        };

        var cityName = function(param) {
            _cityName = param;
            return this;
        };

        var townName = function(param) {
            _townName = param;
            return this;
        };

        var countries = function(param) {
            _countries = param;
            return this;
        };

        var cities = function(param) {
            _cities = param;
            return this;
        };

        var towns = function(param) {
            _towns = param;
            return this;
        };

        var districts = function(param) {
            _districts = param;
            return this;
        };

        var build = function() {
            return {
                addressType: _addressType,
                addressName: _addressName,
                firstName: _firstName,
                lastName: _lastName,
                addressLine1: _addressLine1,
                zipCode: _zipCode,
                phoneNumber: _phoneNumber,
                billingType: _billingType,
                companyName: _companyName,
                taxOffice: _taxOffice,
                taxNumber: _taxNumber,
                citizenId: _citizenId,
                nationality: _nationality,
                countryName: _countryName,
                cityName: _cityName,
                townName: _townName,
                countries: _countries,
                cities: _cities,
                towns: _towns,
                districts: _districts
            };
        };

        return {
            addressType: addressType,
            addressName: addressName,
            firstName: firstName,
            lastName: lastName,
            addressLine1: addressLine1,
            zipCode: zipCode,
            phoneNumber: phoneNumber,
            billingType: billingType,
            companyName: companyName,
            taxOffice: taxOffice,
            taxNumber: taxNumber,
            citizenId: citizenId,
            nationality: nationality,
            cityName: cityName,
            townName: townName,
            countries: countries,
            cities: cities,
            towns: towns,
            districts: districts,
            build: build
        };
    };

    HB.CreateAddressBuilder = CreateAddressBuilder;
})();
