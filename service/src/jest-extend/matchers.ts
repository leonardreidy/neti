// custom matcher for Decimal for jest in Typescript

import { expect } from '@jest/globals';
import type { MatcherFunction } from 'expect';
import Decimal from 'decimal.js';

// Documentation for expect.extend() available at https://jestjs.io/docs/expect#expectextendmatchers
// However, it doesn't appear to be accurate for the TypeScript implementation.
// Also, I used https://icu4c-demos.unicode.org/icu-bin/scompare to assist with the implementation.
// [Manfred, 10jun2023]

// A much better explanation of how to add a custom matcher is available at:
// https://redd.one/blog/practical-guide-to-custom-jest-matchers
// I didn't check out the following, but these could come in handy in the future:
// https://dev.to/zirkelc/improve-your-testing-with-custom-matchers-in-jest-2ibm
// [Manfred, 11jun2023]

const toBeDecimal: MatcherFunction<[actual: unknown, expected: unknown]> =
   function (actual: unknown, expected: unknown) {
      if (
         actual!.constructor.name !== 'Decimal' ||
         expected!.constructor.name !== 'Decimal'
      ) {
         throw new Error('These must be of type Decimal!');
      }
      const pass: boolean = (actual!.toString() == expected!.toString());

      if (pass) {
         const msg = 'Expected "' + expected + '" not to be equal to "' + actual + '"';
         return {
            message: () => msg,
            pass: true,
         };
      }
      else {
         const msg = 'Expected "' + expected + '" but actual is "' + actual + '"';
         return {
            message: () => msg,
            pass: false,
         }
      }
   }

expect.extend({
   toBeDecimal,
});

declare global {
   namespace jest {
      interface Matchers<R> {
         toBeDecimal(expected: Decimal): R;
      }
   }
}

// According to the Jest documentation, the following is required but in fact, commenting it out
// makes no difference [Manfred, 13aug2023]]:
//
// declare module 'expect' {
//    interface AsymmetricMatchers {
//       toBeDecimal(expected: Decimal): void;
//    }
//    interface Matchers<R, T> {
//       toBeDecimal(expected: Decimal): void;
//    }
// }
