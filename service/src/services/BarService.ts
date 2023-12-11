import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IBarService } from "./IBarService";
import { IEnvironment } from "../config/IEnvironment";
import { Types } from "../config/ioc.types";

@injectable()
export class BarService implements IBarService {
   constructor(
      @inject(Types.IEnvironment) environment: IEnvironment,
   ) {
      this._environment = environment;
   }

   public getBar(): string {
      return 'bar';
   }

   private readonly _environment: IEnvironment;
}
