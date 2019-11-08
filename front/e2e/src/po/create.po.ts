import { browser, by, element } from 'protractor';

export class CreatePage {
  async enterQuizzName(text: string) {
    const input = element(by.css('input'));
    await input.clear();
    await input.sendKeys(text);
  }

  async clickOnNext() {
    await element(by.css('button')).click();
  }
}
