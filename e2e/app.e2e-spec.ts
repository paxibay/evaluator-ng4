import { EvaluatorNg4Page } from './app.po';

describe('evaluator-ng4 App', () => {
  let page: EvaluatorNg4Page;

  beforeEach(() => {
    page = new EvaluatorNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
