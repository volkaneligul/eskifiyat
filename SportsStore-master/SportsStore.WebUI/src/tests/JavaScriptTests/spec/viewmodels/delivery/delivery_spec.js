describe("Delivery", function() {
    'use strict';

    var fakeDelivery, server;

    beforeEach(function() {
        HB.SITE_URL = '//test';

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
        server.respondWith('POST', 'https://design.hepsiburada.net/ayagina-gelsin/images/ajax-loader.gif', [
            200, {
                "Content-Type": "application/json"
            },
            JSON.stringify({
                isValid: true,
                success: true
            })
        ]);

        var fakeDeliveryData = new HB.DeliveryBuilder().build();
        fakeDelivery = new HB.Delivery(fakeDeliveryData);
    });

    afterEach(function() {
        server.restore();
    });

    describe("when there is at least one address", function() {
        it("should assign this is an existing user", function() {
            expect(fakeDelivery.hasNoAddress()).toBeFalsy();
        });
    });

    describe("when there is no address", function() {
        beforeEach(function() {
            fakeDelivery.addressItemList([]);
        });

        it("should assign this is a new user", function() {
            expect(fakeDelivery.hasNoAddress()).toBeTruthy();
        });
    });

    describe("when invoice couldn't send with order", function() {
        beforeEach(function() {
            var fakeDeliveryData = new HB.DeliveryBuilder().isInvoiceSentWithOrderAvailable(false).build();
            fakeDelivery = new HB.Delivery(fakeDeliveryData);
        });

        it("should pass the unavailable parameter", function() {
            expect(fakeDelivery.setAndContinue()).toEqual({
                citizenIdRequired: false,
                params: {
                    shippingAddressId: "2b992963-47c8-49ef-a4a8-40ab0264a64e",
                    billingAddressId: "e6205ebf-4ceb-48e2-b5c3-2fa5548e1157",
                    isInvoiceSentWithOrder: false,
                    internalId: 1,
                    specialDeliveryId: 0
                }
            });
        });
    });
});
