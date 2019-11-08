import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('header span')).getText() as Promise<string>;
  }

  async clickOnCreateQuizzButton() {
    const btn = element(by.css('button'));
    await btn.click();
  }
}
