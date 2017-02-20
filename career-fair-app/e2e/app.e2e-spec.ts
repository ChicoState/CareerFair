import { CareerFairAppPage } from './app.po';

describe('career-fair-app App', function() {
  let page: CareerFairAppPage;

  beforeEach(() => {
    page = new CareerFairAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
