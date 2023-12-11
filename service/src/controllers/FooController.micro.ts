import { IBarService } from "../services";
import { FooController } from "./FooController";

describe(`FooController micro tests`, () => {
   it(`should return hello world`, async () => {
      const barService: jest.Mocked<IBarService> = {
         getBar: jest.fn().mockResolvedValue(`world!`),
      };
      const controller = new FooController(barService);
      const result = await controller.get();
      const prefix = result.substring(0, `Hello, world!`.length);
      expect(prefix).toBe("Hello, world!");
   });
});
