export class AngularAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-app-app h1')).getText();
  }
}
