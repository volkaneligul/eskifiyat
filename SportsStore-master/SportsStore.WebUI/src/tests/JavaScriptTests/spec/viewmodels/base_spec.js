describe("Base", function() {
    'use strict';

    var fakeBase, dummyData, server;

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

        dummyData = {};
        fakeBase = new HB.BaseViewModel(dummyData);
    });

    afterEach(function() {
        server.restore();
    });

    describe("when gift cert code wasn't entered", function() {
        it("shouldn't send use gift cert request", function() {
            expect(fakeBase.useGiftCertCode()).toBeFalsy();
        });
    });

    describe("when gift cert code wants to use", function() {
        beforeEach(function() {
            fakeBase.giftCertCode("ABC");
        });
        it("should send correct gift cert code", function() {
            expect(fakeBase.useGiftCertCode()).toBe("ABC");
        });
    });

    describe("when a whitespace used for gift cert code", function() {
        beforeEach(function() {
            fakeBase.giftCertCode("   ");
        });
        it("shouldn't send gift cert request", function() {
            expect(fakeBase.useGiftCertCode()).toBeFalsy();
        });
    });
});
