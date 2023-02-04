import app from '../../../src/app';

describe('\'design/style\' service', () => {
  it('registered the service', () => {
    const service = app.service('design/style');
    expect(service).toBeTruthy();
  });
});
