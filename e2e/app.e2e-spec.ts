import { DomainDrivenProjectTemplatePage } from './app.po';

describe('DomainDrivenProject App', function() {
  let page: DomainDrivenProjectTemplatePage;

  beforeEach(() => {
    page = new DomainDrivenProjectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
