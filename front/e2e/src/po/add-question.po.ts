import { browser, by, element } from 'protractor';
import { Question } from '../../../src/app/interface/question';

export class AddQuestionPage {
  async fillForm(q: Question) {
    const label = element(by.css('textarea'));
    await label.clear();
    await label.sendKeys(q.label);

    for (const letter of ['A', 'B', 'C', 'D']) {
      const answer = element(by.css(`input[ng-reflect-name="answer${letter}"]`));
      await answer.clear();
      await answer.sendKeys(q['answer' + letter]);
    }
    await element(by.css(`input[type="radio"][ng-reflect-value="${q.correctAnswer}"]`)).click();

  }

  async clickOnAddButton() {
    await element(by.css('button.primary')).click();
  }
}
