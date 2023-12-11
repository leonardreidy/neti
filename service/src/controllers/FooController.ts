import "reflect-metadata";
import { Controller, Get, Route } from "tsoa";
import { provide } from "inversify-binding-decorators";
import { IBarService } from "../services";
import { inject } from "inversify";
import { Types } from "../config/ioc.types";

@Route('foo')
@provide(FooController)
export class FooController extends Controller {
   constructor(
      @inject(Types.IBarService)
      barService: IBarService
   ) {
      super();
      this._barService = barService;
   }

   @Get()
   public async get(): Promise<string> {
      return `Hello, world! It's now ${Date.now().toLocaleString()}`;
   }

   private readonly _barService: IBarService;
}
