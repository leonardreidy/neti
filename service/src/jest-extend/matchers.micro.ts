import Decimal from 'decimal.js';

describe('matcher for Decimal', () => {
   it('is equal', () => {
      const d1 = new Decimal(42);
      const d2 = new Decimal(42);
      expect(d1).toBeDecimal(d2);
   });

   it('is not equal', () => {
      const d1 = new Decimal(42);
      const d2 = new Decimal(43);
      expect(d1).not.toBeDecimal(d2);
   });

   it('is equal fails', () => {
      const actual = new Decimal(42);
      const expected = new Decimal(43);
      const f = () => expect(actual).toBeDecimal(expected);
      expect(f).toThrowError("Expected \"43\" but actual is \"42\"");
   });

   it('is not equal fails', () => {
      const d1 = new Decimal(42);
      const d2 = new Decimal(42);
      const f = () => expect(d1).not.toBeDecimal(d2);
      expect(f).toThrowError("Expected \"42\" not to be equal to \"42\"");
   });
});
