import { IBarService } from '../services';
import { IEnvironment } from './IEnvironment';
import { iocContainer } from './ioc';
import { Types } from './ioc.types';

describe(`ioc.ts integration tests`, () => {
   it(`should return Environment`, () => {
      const environment: IEnvironment = iocContainer.get<IEnvironment>(Types.IEnvironment);
      expect(environment).toBeDefined();
      expect(environment.constructor.name).toBe(`Environment`);
   });

   it(`should return BarService`, () => {
      const barService = iocContainer.get<IBarService>(Types.IBarService);
      expect(barService).toBeDefined();
      expect(barService.constructor.name).toBe(`BarService`);
   });
});
