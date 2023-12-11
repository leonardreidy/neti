import { Container, decorate, injectable } from 'inversify';
import { IEnvironment } from './IEnvironment';
import { Types } from './ioc.types';
import { Environment } from './Environment';
import { BarService, IBarService } from '../services';
import { buildProviderModule } from 'inversify-binding-decorators';
import { Controller } from 'tsoa';

export const iocContainer = new Container();

// In alphabetical order:
iocContainer.bind<IEnvironment>(Types.IEnvironment).to(Environment);
iocContainer.bind<IBarService>(Types.IBarService).to(BarService);

// Controller is in a 3rd party library, so we need to call decorate() to add the
// @injectable() decorator:
decorate(injectable(), Controller);

iocContainer.load(buildProviderModule());
