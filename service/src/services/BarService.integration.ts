import { iocContainer } from "../config/ioc";
import { Types } from "../config/ioc.types";
import { IBarService } from "./IBarService";

describe(`BarService integration tests`, () => {
   it(`should return something`, () => {
      const barService = iocContainer.get<IBarService>(Types.IBarService);
      const result = barService.getBar();
      expect(result).toBe('bar');
   });
});
