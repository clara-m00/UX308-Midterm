import { gymDiscount } from "../gymDiscount.js";

describe("test gymDiscount", function () {
    it("test the total cost with a base cost of $40, and the 1 friend discount.", function () {
        let cost= 40;
        let friends = 1;
        let totalcost = gymDiscount (cost, friends);
        expect(totalcost.toFixed(2)).toBe("38.00");
    });
    it("test the total cost with a base cost of $40, and the 2 friends discount.", function () {
        let cost= 40;
        let friends = 2;
        let totalcost = gymDiscount (cost, friends);
        expect(totalcost.toFixed(2)).toBe("36.00");
    });
    it("test the total cost with a base cost of $40, and the 3 friends discount.", function () {
        let cost= 40;
        let friends = 3;
        let totalcost = gymDiscount (cost, friends);
        expect(totalcost.toFixed(2)).toBe("34.00");
    });
    it("test the total cost with a base cost of $40, and the 4 friends discount.", function () {
        let cost= 40;
        let friends = 4;
        let totalcost = gymDiscount (cost, friends);
        expect(totalcost.toFixed(2)).toBe("34.00");
    });
});