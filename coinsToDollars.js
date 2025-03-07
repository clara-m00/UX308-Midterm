function coinsTotal (nickels, dimes, quarters, loonies, toonies) {
   let nickelValue = nickels*0.05;
   let dimeValue = dimes*0.10;
   let quarterValue = quarters*0.25;
   let loonieValue = loonies*1.00;
   let toonieValue = toonies*2.00;
   let totalValue = nickelValue + dimeValue + quarterValue + loonieValue + toonieValue;

   return totalValue;
}

export {coinsTotal}
