import "reflect-metadata";
import { injectable } from 'inversify';
import { IEnvironment } from './IEnvironment';

@injectable()
export class Environment implements IEnvironment {
   readonly expressPort: number = process.env.EXPRESS_PORT ? parseInt(process.env.EXPRESS_PORT as string) : 2999;
}
