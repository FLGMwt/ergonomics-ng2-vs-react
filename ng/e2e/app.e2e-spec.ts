import { SampleNgPage } from './app.po';

describe('sample-ng App', () => {
  let page: SampleNgPage;

  beforeEach(() => {
    page = new SampleNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
