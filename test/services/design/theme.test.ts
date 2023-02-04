import app from '../../../src/app';

describe('\'design/theme\' service', () => {
  it('registered the service', () => {
    const service = app.service('design/theme');
    expect(service).toBeTruthy();
  });
});
