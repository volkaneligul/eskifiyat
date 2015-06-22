(function() {
    "use strict";

    var OtpVmBuilder = function() {
        var _gsmNumber = "5555555555";
        var _remainingSecond = 120;
        var _referenceCode = "ABC";
        var _otpId = "ABC123";
        var _exceptionMessageList = [];

        var gsmNumber = function(param) {
            _gsmNumber = param;
            return this;
        };

        var remainingSecond = function(param) {
            _remainingSecond = param;
            return this;
        };

        var referenceCode = function(param) {
            _referenceCode = param;
            return this;
        };

        var otpId = function(param) {
            _otpId = param;
            return this;
        };

        var exceptionMessageList = function() {
            var __itemList = [];

            for (var i = 0; i < arguments.length; i++) {
                __itemList.push(arguments[i]);
            };

            _exceptionMessageList = __itemList;
            return this;
        };

        var build = function() {
            return {
                gsmNumber: _gsmNumber,
                remainingSecond: _remainingSecond,
                referenceCode: _referenceCode,
                otpId: _otpId,
                exceptionMessageList: _exceptionMessageList
            };
        };

        return {
            gsmNumber: gsmNumber,
            remainingSecond: remainingSecond,
            referenceCode: referenceCode,
            otpId: otpId,
            exceptionMessageList: exceptionMessageList,
            build: build
        };
    };

    HB.OtpVmBuilder = OtpVmBuilder;
})();
