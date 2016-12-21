import { Ng2HomeworkPage } from './app.po';

describe('ng2-homework App', function() {
  let page: Ng2HomeworkPage;

  beforeEach(() => {
    page = new Ng2HomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
