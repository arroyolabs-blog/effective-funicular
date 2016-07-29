"use strict";
var testing_1 = require('@angular/core/testing');
var effective_funicular_component_1 = require('../app/effective-funicular.component');
testing_1.beforeEachProviders(function () { return [effective_funicular_component_1.EffectiveFunicularAppComponent]; });
testing_1.describe('App: EffectiveFunicular', function () {
    testing_1.it('should create the app', testing_1.inject([effective_funicular_component_1.EffectiveFunicularAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'Effective Funicular Demo SPA\'', testing_1.inject([effective_funicular_component_1.EffectiveFunicularAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('Effective Funicular Demo SPA');
    }));
});
//# sourceMappingURL=effective-funicular.component.spec.js.map