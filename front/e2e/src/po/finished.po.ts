import { browser, by, element } from 'protractor';

export class FinishedPage {
  async getCongratMsg() {
    return element(by.css('h1')).getText();
  }

  async clickOnHomeButton() {
    await element(by.css('button'));
  }


}
