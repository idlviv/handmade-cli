import { HandmadeCliPage } from './app.po';

describe('handmade-cli App', () => {
  let page: HandmadeCliPage;

  beforeEach(() => {
    page = new HandmadeCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
