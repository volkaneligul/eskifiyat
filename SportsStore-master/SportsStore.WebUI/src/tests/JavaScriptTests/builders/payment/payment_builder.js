(function() {
    "use strict";

    var PaymentBuilder = function() {
        var _corporatePaymentInfo = {
            isAvailable: false,
            messageList: []
        };
        var _paymentTypeList = [{
            paymentName: "Kredi / Banka Kartı",
            paymentTypeCode: 1,
            paymentId: 1
        }, {
            paymentName: "Havale",
            paymentTypeCode: 2,
            paymentId: 2
        }];
        var _passiveCardTypeList = [];
        var _bankAccountList = [{
            bankId: 1,
            bankName: "İş Bankası, İstanbul Kurumsal Şube, Şube Kodu: 1111 Hesap No: 0040927",
            iban: "IBAN: TR280006400000111110040927"
        }, {
            bankId: 2,
            bankName: "Garanti Bankası, Bakırköy Kurumsal Şubesi, Şube Kodu: 382 Hesap No: 6298947",
            iban: "IBAN: TR870006200038200006298947"
        }, {
            bankId: 3,
            bankName: "Yapı Kredi Bankası, Gümüşsuyu Şubesi, Şube Kodu: 0276 Hesap No: 69303163",
            iban: "IBAN: TR130006701000000069303163"
        }, {
            bankId: 4,
            bankName: "TEB, Yeditepe Kurumsal Şube, Şube Kodu: 538 Hesap No: 42887526",
            iban: "IBAN: TR040003200000000042887526"
        }, {
            bankId: 5,
            bankName: "Akbank, Rumeli Kurumsal Şubesi, Şube Kodu: 1232 Hesap No: 0040746",
            iban: "IBAN: TR880004601232888000040746"
        }];
        var _showSavedCreditCard = true;
        var _savedCreditCardInfoList = [{
            creditCardId: "df93b25e-9244-4889-a05a-50536cb4ddc7",
            cardNumber: "************1231",
            cardInfo: {
                bankName: "GARANTI",
                cardType: {
                    cardBrand: "Bonus"
                }
            }
        }];

        var isCorporatePaymentAvailable = function(param) {
            _corporatePaymentInfo.isAvailable = param;
            return this;
        };

        var corporatePaymentMessages = function() {
            var __itemList = [];

            for (var i = 0; i < arguments.length; i++) {
                __itemList.push(arguments[i]);
            };

            _corporatePaymentInfo.messageList = __itemList;
            return this;
        };

        var paymentTypeList = function() {
            var __itemList = [];

            for (var i = 0; i < arguments.length; i++) {
                __itemList.push(arguments[i]);
            };

            _paymentTypeList = __itemList;
            return this;
        };

        var passiveCardTypeList = function() {
            var __itemList = [];

            for (var i = 0; i < arguments.length; i++) {
                __itemList.push(arguments[i]);
            };

            _passiveCardTypeList = __itemList;
            return this;
        };

        var showSavedCreditCard = function(param) {
            _showSavedCreditCard = param;
            return this;
        };

        var build = function() {
            return {
                corporatePaymentInfo: _corporatePaymentInfo,
                paymentTypeList: _paymentTypeList,
                passiveCardTypeList: _passiveCardTypeList,
                bankAccountList: _bankAccountList,
                showSavedCreditCard: _showSavedCreditCard,
                savedCreditCardInfoList: _savedCreditCardInfoList
            };
        };

        return {
            isCorporatePaymentAvailable: isCorporatePaymentAvailable,
            corporatePaymentMessages: corporatePaymentMessages,
            paymentTypeList: paymentTypeList,
            passiveCardTypeList: passiveCardTypeList,
            showSavedCreditCard: showSavedCreditCard,
            build: build
        };
    };

    HB.PaymentBuilder = PaymentBuilder;
})();
