import { browser, by, element } from 'protractor';

export class SetupPage {
  async clickOnAddQuestionButton() {
    await element(by.css('button.primary')).click();
  }
  async clickOnSaveButton() {
    await element(by.css('button:not(.primary)')).click();
  }
}
