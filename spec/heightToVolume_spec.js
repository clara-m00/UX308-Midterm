import { heightToVolume } from "../heightToVolume.js";

describe("test heightToVolume", function () {
    it("test a height of 10 meters converted to volume in cubic meters ", function () {
        let height = 10;
        let volume = heightToVolume(height);
        expect(volume.toFixed(2)).toBe("1000.00");
    });
    it("test a height of 8 meters converted to volume in cubic meters ", function () {
        let height = 8;
        let volume = heightToVolume(height);
        expect(volume.toFixed(2)).toBe("512.00");
    });
    it("test a height of 17 meters converted to volume in cubic meters ", function () {
        let height = 17;
        let volume = heightToVolume(height);
        expect(volume.toFixed(2)).toBe("4913.00");
    });
});