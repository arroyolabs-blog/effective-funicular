export class EffectiveFunicularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('effective-funicular-app h1')).getText();
  }
}
