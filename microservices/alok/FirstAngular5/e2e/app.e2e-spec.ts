import { FirstAngular5Page } from './app.po';

describe('first-angular5 App', function() {
  let page: FirstAngular5Page;

  beforeEach(() => {
    page = new FirstAngular5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
