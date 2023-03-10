// Initializes the `design/system` service on path `/design/system`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { System } from './system.class';
import createModel from '../../../models/system.model';
import hooks from './system.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'design/system': System & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/design/system', new System(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('design/system');

  service.hooks(hooks);
}
