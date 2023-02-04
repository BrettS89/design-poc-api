import app from '../../../src/app';

describe('\'design/system\' service', () => {
  it('registered the service', () => {
    const service = app.service('design/system');
    expect(service).toBeTruthy();
  });
});
