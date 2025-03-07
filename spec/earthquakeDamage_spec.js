import { earthquakeDamage } from "../earthquakeDamage.js";

describe("test earthquakeDamage", function () {
    it("test what the result would be if the Richter Scale number is 3", function () {
        let intensity = 3;
        let result = earthquakeDamage(intensity);
        expect(result).toBe("Little or no damage");
    });
    it("test what the result would be if the Richter Scale number is 5.10", function () {
        let intensity = 5.10;
        let result = earthquakeDamage(intensity);
        expect(result).toBe("Some damage");
    });
    it("test what the result would be if the Richter Scale number is 6", function () {
        let intensity = 6;
        let result = earthquakeDamage(intensity);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });
    it("test what the result would be if the Richter Scale number is 7", function () {
        let intensity = 7;
        let result = earthquakeDamage(intensity);
        expect(result).toBe("Disaster: buildings may collapse");
    });
    it("test what the result would be if the Richter Scale number is 9", function () {
        let intensity = 9;
        let result = earthquakeDamage(intensity);
        expect(result).toBe("Catastrophe: most buildings are destroyed");
    });
});