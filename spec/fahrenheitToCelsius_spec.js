import { fahrenheit2celsius } from "../fahrenheitToCelsius.js";

describe("test fahrenheit2celsius", function() {
    it("test boiling point in fahrenheit is 212 ", function() {
      let fahr = 212;
    let celsius = fahrenheit2celsius (fahr);
      expect(celsius.toFixed(2)).toBe("100.00");
    });
    
    it("test freezing point of water in fahrenheit is 32 ", function() {
        let fahr = 32;
      let celsius = fahrenheit2celsius (fahr);
        expect(celsius.toFixed(2)).toBe("0.00");
      });

      it("test room temp in fahrenheit is 32 ", function() {
        let fahr = 70;
      let celsius = fahrenheit2celsius (fahr);
        expect(celsius.toFixed(2)).toBe("21.11");
      });
  });