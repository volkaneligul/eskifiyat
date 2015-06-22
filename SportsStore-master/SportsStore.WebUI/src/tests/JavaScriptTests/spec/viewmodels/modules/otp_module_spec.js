describe("OTP Module", function() {
    var fakeOtpVM,
        fakeOtp,
        server,
        e;

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

        e = {
            preventDefault: jasmine.createSpy()
        };

        var fakeOtpVmData = new HB.OtpVmBuilder().build();
        fakeOtpVM = new HB.OtpViewModel(fakeOtpVmData, function() {
            return null;
        }, function() {
            return null;
        });

        fakeOtp = new HB.Otp({
            data: {
                isOtpRequired: true
            }
        });
    });

    describe("when OTP is required", function() {
        beforeEach(function() {
            spyOn($.fancybox, "open");
        });
        it("should show OTP lightbox", function() {
            expect(fakeOtp.init()).toBeTruthy();
            expect($.fancybox.open).toHaveBeenCalled();
        });
    });

    describe("when OTP is not required", function() {
        beforeEach(function() {
            spyOn($.fancybox, "open");
            fakeOtp = new HB.Otp({
                data: {
                    isOtpRequired: false
                }
            });
        });
        afterEach(function() {
            fakeOtp = new HB.Otp({
                data: {
                    isOtpRequired: true
                }
            });
        });

        it("shouldn't open OTP lightbox", function() {
            expect(fakeOtp.init()).toBeFalsy();
            expect($.fancybox.open).not.toHaveBeenCalled();
        });
    });

    describe("when lightbox is open", function() {
        beforeEach(function() {
            $.fancybox.isOpen = true;
        });
        afterEach(function() {
            $.fancybox.isOpen = false;
        });

        it("control method should return that it is open", function() {
            expect(fakeOtp.isLightboxOpen()).toBeTruthy();
        });
    });

    describe("when lightbox is close", function() {
        it("control method should return that it is not open", function() {
            expect(fakeOtp.isLightboxOpen()).toBeFalsy();
        });
    });

    describe("when countdown time is running", function() {
        it("should show countdown timer", function() {
            expect(fakeOtpVM.isTimeUp()).toBeFalsy();
        });

        it("should continue countdown", function() {
            expect(fakeOtpVM.countdown()).toBeTruthy();
        });
    });

    describe("when countdown time is up", function() {
        beforeEach(function() {
            fakeOtpVM.timer(0);
        });
        afterEach(function() {
            fakeOtpVM.timer(120);
        });

        it("should stop countdown", function() {
            expect(fakeOtpVM.isTimeUp()).toBeTruthy();
            expect(fakeOtpVM.countdown()).toBeLessThan(1000);
        });

        it("verify action shouldn't be available", function() {
            expect(fakeOtpVM.verifyActivationCode(fakeOtpVM, e)).toBeFalsy();
        });

        it("should show time expired message", function() {
            fakeOtpVM.verifyActivationCode(fakeOtpVM, e);
            expect(fakeOtpVM.errorMessages()).toEqual(["ABC referans numarası ile telefonuna gönderilen cep şifrenin geçerlilik süresi doldu. Lütfen yeni cep şifre isteyin."]);
        });
    });

    describe("when user clicks resend button before time was up", function() {
        beforeEach(function() {
            spyOn($.fancybox, "update");
            fakeOtpVM.reSendSms();
        });

        it("should show error message", function() {
            expect(fakeOtpVM.hasError()).toBeTruthy();
            expect(fakeOtpVM.errorMessages()).toEqual(["Yeni cep şifre talebini süre dolduktan sonra tekrarlayabilirsin."]);
        });

        it('should resize lightbox', function() {
            expect($.fancybox.update).toHaveBeenCalled();
        });
    });

    describe("when user tries to verify the OTP request", function() {
        beforeEach(function() {
            fakeOtpVM.activationCode("123456");
            fakeOtpVM.otpId("123456");
        });

        it("should send correct data to varify method", function() {
            expect(fakeOtpVM.verifyActivationCode(fakeOtpVM, e)).toEqual({
                activationCode: "123456",
                otpId: "123456"
            });
        });
    });

    describe("when there is at least one error message", function() {
        beforeEach(function() {
            fakeOtpVM.errorMessages.push('lorem ipsum');
        });
        afterEach(function() {
            fakeOtpVM.errorMessages([]);
        });

        it("should show error messages", function() {
            expect(fakeOtpVM.hasError()).toBeTruthy();
        });
    });

    describe("when there is no error message", function() {
        it("shouldn't show error messages", function() {
            expect(fakeOtpVM.hasError()).toBeFalsy();
        });
    });

    describe("when OTP data is missing", function() {
        beforeEach(function() {
            var fakeOtpVmData = new HB.OtpVmBuilder().referenceCode(null).exceptionMessageList("Hata").build();
            fakeOtpVM = new HB.OtpViewModel(fakeOtpVmData, function() {
                return null;
            }, function() {
                return null;
            });
        });
        afterEach(function() {
            var fakeOtpVmData = new HB.OtpVmBuilder().build();
            fakeOtpVM = new HB.OtpViewModel(fakeOtpVmData, function() {
                return null;
            }, function() {
                return null;
            });
        });

        it("should only show error message", function() {
            expect(fakeOtpVM.hasData()).toBeFalsy();
        });
    });

    describe("when OTP data is full", function() {
        it("should show validation code form", function() {
            expect(fakeOtpVM.hasData()).toBeTruthy();
        });
    });
});
