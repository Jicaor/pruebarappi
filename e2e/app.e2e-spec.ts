import { PruebarappiPage } from './app.po';

describe('pruebarappi App', function() {
  let page: PruebarappiPage;

  beforeEach(() => {
    page = new PruebarappiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
