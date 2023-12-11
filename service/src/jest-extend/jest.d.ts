type OwnMatcher<Params extends unknown[]> = (
   this: jest.MatcherContext,
   actual: unknown,
   ...params: Params
) => jest.CustomMatcherResult
declare global {
   namespace jest {
      interface Matchers<R, T> {
         // Note that we are defining a public call signature
         // for our matcher here (how it will be used):
         // expect(5).toBeInRange(3, 7)
         toBeDecimal(expected: Decimal): T;
      }
      interface ExpectExtendMap {
         // Here, we're describing the call signature of our
         // matcher for the "expect.extend()" call.
         toBeDecimal: OwnMatcher<[expected: Decimal]>;
      }
   }
}
