describe("Create Address", function() {
    "use strict";

    var fakeCreateAddress, server;

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

        var addressData = new HB.CreateAddressBuilder().build();
        var fakeDelivery = new HB.Delivery(HB.DeliveryBuilder().build());
        fakeCreateAddress = new HB.CreateAddress(addressData, fakeDelivery, {});
    });

    afterEach(function() {
        server.restore();
    });

    describe("when form was opened", function() {
        it("should know this is returning user", function() {
            expect(fakeCreateAddress.hasNoAddress()).toBeFalsy();
        });
    });

    describe("when user hasn't an address", function() {
        beforeEach(function() {
            var fakeDelivery = new HB.Delivery(HB.DeliveryBuilder().addressItemList().build());
            var addressData = new HB.CreateAddressBuilder().build();
            fakeCreateAddress = new HB.CreateAddress(addressData, fakeDelivery, {});
        });

        it("should know this user hasn't an address", function() {
            expect(fakeCreateAddress.hasNoAddress()).toBeTruthy();
        });
    });
});
