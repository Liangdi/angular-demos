import { I18nDemoPage } from './app.po';

describe('i18n-demo App', () => {
  let page: I18nDemoPage;

  beforeEach(() => {
    page = new I18nDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
