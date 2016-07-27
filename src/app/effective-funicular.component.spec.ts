import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EffectiveFunicularAppComponent } from '../app/effective-funicular.component';

beforeEachProviders(() => [EffectiveFunicularAppComponent]);

describe('App: EffectiveFunicular', () => {
  it('should create the app',
      inject([EffectiveFunicularAppComponent], (app: EffectiveFunicularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Effective Funicular Demo SPA\'',
      inject([EffectiveFunicularAppComponent], (app: EffectiveFunicularAppComponent) => {
    expect(app.title).toEqual('Effective Funicular Demo SPA');
  }));
});
