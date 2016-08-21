import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularAppAppComponent } from '../app/angular-app.component';

beforeEachProviders(() => [AngularAppAppComponent]);

describe('App: AngularApp', () => {
  it('should create the app',
      inject([AngularAppAppComponent], (app: AngularAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-app works!\'',
      inject([AngularAppAppComponent], (app: AngularAppAppComponent) => {
    expect(app.title).toEqual('angular-app works!');
  }));
});
