describe("Payment", function() {
    'use strict';

    var fakePayment, server;

    beforeEach(function() {
        HB.SITE_URL = "//test";

        server = sinon.fakeServer.create();
        server.autoRespond = true;
        server.respondWith('POST', HB.SITE_URL, [
            200, {
                "Content-Type": "application/json"
            },
            JSON.stringify({
                isValid: true,
                success: true
            })
        ]);

        var fakePaymentData = new HB.PaymentBuilder().build();
        fakePayment = new HB.Payment(fakePaymentData);
    });

    afterEach(function() {
        server.restore();
    });

    describe("when there is at least one bank account", function() {
        it("should show bank accounts", function() {
            expect(fakePayment.hasBankList()).toBeTruthy();
        });
    });

    describe("when there is no installment option", function() {
        it("shouldn't installment options", function() {
            expect(fakePayment.isInstallmentsVisible()).toBeFalsy();
        });
    });

    describe("when there is at least one installment option", function() {
        beforeEach(function() {
            var dummyInstallment = HB.InstallmentBuilder().build();
            var dummySelectedInstallment = function() {
                return 2;
            };
            fakePayment.installmentList.push(new HB.Installment(dummyInstallment, dummySelectedInstallment))
        });

        afterEach(function() {
            fakePayment.installmentList.removeAll();
        });

        it("should show installment options", function() {
            expect(fakePayment.isInstallmentsVisible()).toBeTruthy();
        });
    });

    describe("when user selects credit card option and continues", function() {
        beforeEach(function() {
            fakePayment.creditCardForm = function() {
                return $('<form>')
                    .attr({
                        method: 'POST',
                        id: 'form-credit-card'
                    });
            };

            fakePayment.selectedPaymentType(1);
            fakePayment.cardNo("554960124562");
            fakePayment.month("10");
            fakePayment.year("14");
            fakePayment.securityCode(123);
            fakePayment.selectedInstallment(0);
            fakePayment.isPointUsed(false);
            fakePayment.holderName("Sevil");
        });

        it("should send correct parameter", function() {
            expect(fakePayment.params()).toEqual({
                selectedPaymentType: 1,
                cardNo: "554960124562",
                expireMonth: "10",
                expireYear: "14",
                securityCode: 123,
                installment: 0,
                usePoint: false,
                holderName: "Sevil"
            });
        });
    });

    describe("when user selects money order option and continues", function() {
        beforeEach(function() {
            fakePayment.selectedPaymentType(2);
            fakePayment.selectedBank("Garanti");
        });

        it("should send correct parameter", function() {
            expect(fakePayment.params()).toEqual({
                selectedPaymentType: 2,
                selectedBank: "Garanti"
            });
        });
    });

    describe("when user selects an undefined option and tries to continue", function() {
        beforeEach(function() {
            fakePayment.selectedPaymentType(5);
            fakePayment.selectedBank("Garanti");
        });

        afterEach(function() {
            fakePayment.selectedPaymentType(1);
        });

        it("should send empty object", function() {
            expect(fakePayment.params()).toEqual({});
        });
    });

    describe("when user selects credit card option", function() {
        beforeEach(function() {
            fakePayment.creditCardForm = function() {
                return $('<form>')
                    .attr({
                        method: 'POST',
                        id: 'form-credit-card'
                    });
            };

            fakePayment.selectedPaymentType(1);
        });

        it("shouldn't continue before setting all fields of credit card form", function() {
            expect(fakePayment.proceed()).toBeFalsy();
        });
    });

    describe('when credit cart validation is enabled', function() {
        beforeEach(function() {
            fakePayment.isCreditCardValidationEnabled(true);
        });

        it('should validate credit card format with luhn algorithm', function() {
            expect(fakePayment.creditCardControl().validationRules).toEqual({
                cardNumber: {
                    creditcard: true
                },
                ccv: {
                    minlength: 3
                }
            });
        });
    });

    describe('when credit cart validation is disabled', function() {
        beforeEach(function() {
            fakePayment.isCreditCardValidationEnabled(false);
        });

        it('should validate credit card format with luhn algorithm', function() {
            expect(fakePayment.creditCardControl().validationRules).toEqual({
                cardNumber: {
                    minlength: 15
                },
                ccv: {
                    minlength: 3
                }
            });
        });
    });
});
