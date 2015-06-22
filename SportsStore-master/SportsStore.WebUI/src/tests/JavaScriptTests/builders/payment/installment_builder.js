(function() {
    "use strict";

    var InstallmentBuilder = function() {
        var _installment = 2;
        var _interestRate = 0.0;
        var _monthlyInstallmentPayment = "40,16";
        var _totalPayment = "80,33";
        var _isCampaign = true;
        var _shippingCampaignDiscountPercentage = 0.0;

        var installment = function(param) {
            _installment = param;
            return this;
        };

        var interestRate = function(param) {
            _interestRate = param;
            return this;
        };

        var monthlyInstallmentPayment = function(param) {
            _monthlyInstallmentPayment = param;
            return this;
        };

        var totalPayment = function(param) {
            _totalPayment = param;
            return this;
        };

        var isCampaign = function(param) {
            _isCampaign = param;
            return this;
        };

        var shippingCampaignDiscountPercentage = function(param) {
            _shippingCampaignDiscountPercentage = param;
            return this;
        };

        var build = function() {
            return {
                installment: _installment,
                interestRate: _interestRate,
                monthlyInstallmentPayment: _monthlyInstallmentPayment,
                totalPayment: _totalPayment,
                isCampaign: _isCampaign,
                shippingCampaignDiscountPercentage: _shippingCampaignDiscountPercentage
            };
        };

        return {
            installment: installment,
            interestRate: interestRate,
            monthlyInstallmentPayment: monthlyInstallmentPayment,
            totalPayment: totalPayment,
            isCampaign: isCampaign,
            shippingCampaignDiscountPercentage: shippingCampaignDiscountPercentage,
            build: build
        };
    };

    HB.InstallmentBuilder = InstallmentBuilder;
})();
