// Initializes the `design/theme` service on path `/design/theme`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Theme } from './theme.class';
import createModel from '../../../models/theme.model';
import hooks from './theme.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'design/theme': Theme & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/design/theme', new Theme(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('design/theme');

  service.hooks(hooks);
}
