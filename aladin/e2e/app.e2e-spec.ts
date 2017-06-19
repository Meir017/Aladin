import { AladinPage } from './app.po';

describe('aladin App', () => {
  let page: AladinPage;

  beforeEach(() => {
    page = new AladinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
