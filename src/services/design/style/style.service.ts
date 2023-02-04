// Initializes the `design/style` service on path `/design/style`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Style } from './style.class';
import createModel from '../../../models/style.model';
import hooks from './style.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'design/style': Style & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/design/style', new Style(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('design/style');

  service.hooks(hooks);
}
