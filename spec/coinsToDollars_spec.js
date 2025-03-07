import { coinsTotal } from "../coinsToDollars.js";

describe("test coinsTotal", function () {
    it("test with 8 nickels", function () {
        let nickels = 8;
        let dimes = 0;
        let quarters = 0;
        let loonies = 0;
        let toonies = 0;
        let totalValue = coinsTotal (nickels, dimes, quarters, loonies, toonies);
        expect(totalValue.toFixed(2)).toBe("0.40");
    });
    it("test with 8 loonies", function () {
        let nickels = 0;
        let dimes = 0;
        let quarters = 0;
        let loonies = 8;
        let toonies = 0;
        let totalValue = coinsTotal (nickels, dimes, quarters, loonies, toonies);
        expect(totalValue.toFixed(2)).toBe("8.00");
    });
    it("test with 0 coins", function () {
        let nickels = 0;
        let dimes = 0;
        let quarters = 0;
        let loonies = 0;
        let toonies = 0;
        let totalValue = coinsTotal (nickels, dimes, quarters, loonies, toonies);
        expect(totalValue.toFixed(2)).toBe("0.00");
    });
  
});