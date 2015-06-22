describe("OTP Profile", function() {
    var fakeOtp,
        server,
        dummyData;

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

        dummyData = {
            profileName: "Test",
            gsmNumber: "5555555555",
            hasSecureProfile: false
        };

        fakeOtp = new HB.OtpProfile(dummyData);
    });

    describe("when sms sent but profile is not approved yet", function() {
        beforeEach(function() {
            fakeOtp.isSmsSent(true);
        });

        it("should show 'SMS is sent' message", function() {
            expect(fakeOtp.smsSentInfoVisible()).toBeTruthy();
        });
    });

    describe("when user clicks 'İsmi Değiştir' link", function() {
        beforeEach(function() {
            fakeOtp.changeProfileName();
        });

        it("profile name text should be change as a text input", function() {
            expect(fakeOtp.profileNameChanged()).toBeTruthy();
        });
    });

    describe("when user clicks 'Telefonu değiştir' link", function() {
        beforeEach(function() {
            fakeOtp.changePhone();
        });

        it("phone number text should be change as a text input", function() {
            expect(fakeOtp.isSmsSent()).toBeFalsy();
        });
    });
});
