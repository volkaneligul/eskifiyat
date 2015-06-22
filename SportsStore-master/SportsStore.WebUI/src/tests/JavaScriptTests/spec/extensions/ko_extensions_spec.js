describe("KO Extensions", function() {
    'use strict';

    var fakeVm;

    beforeEach(function() {
        fakeVm = new function() {
            var lettersOnly = ko.observable("").extend({
                lettersonly: true
            });

            return {
                lettersOnly: lettersOnly
            };
        };
    });

    describe("when value accepts only letters", function() {
        it("shouldn't accept digits", function() {
            fakeVm.lettersOnly("123");
            expect(fakeVm.lettersOnly()).toBe("");
        });

        it("should accept space", function() {
            fakeVm.lettersOnly("Sevil Yılmaz");
            expect(fakeVm.lettersOnly()).toBe("Sevil Yılmaz");
        });

        it("should accept Turkish characters", function() {
            fakeVm.lettersOnly("ğĞüÜşŞıİöÖçÇ");
            expect(fakeVm.lettersOnly()).toBe("ğĞüÜşŞıİöÖçÇ");
        });
    });
});
