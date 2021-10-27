import { newE2EPage } from '@stencil/core/testing';

describe('component-two', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-two></component-two>');

    const element = await page.find('component-two');
    expect(element).toHaveClass('hydrated');
  });
});
