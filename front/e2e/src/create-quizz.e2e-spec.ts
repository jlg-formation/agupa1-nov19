import { AppPage } from './po/app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './po/create.po';
import { SetupPage } from './po/setup.po';
import { AddQuestionPage } from './po/add-question.po';
import { FinishedPage } from './po/finished.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let create: CreatePage;
  let setup: SetupPage;
  let addQuestion: AddQuestionPage;
  let finished: FinishedPage;

  beforeEach(() => {
    page = new AppPage();
    create = new CreatePage();
    setup = new SetupPage();
    addQuestion = new AddQuestionPage();
    finished = new FinishedPage();
  });

  it('should create a quizz', async () => {
    await page.navigateTo();
    await browser.sleep(1000);
    await page.clickOnCreateQuizzButton();
    await browser.sleep(1000);
    await create.enterQuizzName('toto');
    await browser.sleep(1000);
    await create.clickOnNext();
    await browser.sleep(1000);
    await setup.clickOnAddQuestionButton();
    await browser.sleep(1000);
    await addQuestion.fillForm({
      label: 'Quelle est la capitale de la Roumanie',
      answerA: 'Berlin',
      answerB: 'Stockholm',
      answerC: 'Bucarest',
      answerD: 'Prague',
      correctAnswer: 'C',
    });
    await browser.sleep(1000);
    await addQuestion.clickOnAddButton();
    await browser.sleep(1000);
    await setup.clickOnSaveButton();
    await browser.sleep(1000);
    const message = await finished.getCongratMsg();
    await finished.clickOnHomeButton();
    await browser.sleep(1000);
    expect(message).toEqual('Bravo !');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
