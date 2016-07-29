import { EffectiveFunicularPage } from './app.po';

describe('effective-funicular App', function() {
  let page: EffectiveFunicularPage;

  beforeEach(() => {
    page = new EffectiveFunicularPage();
  })

  it('should display homepage elements', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Effective Funicular Demo SPA');
  });
});
