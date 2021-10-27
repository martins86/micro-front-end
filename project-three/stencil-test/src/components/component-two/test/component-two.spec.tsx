import { newSpecPage } from '@stencil/core/testing';
import { ComponentTwo } from '../component-two';

describe('component-two', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentTwo],
      html: `<component-two></component-two>`,
    });
    expect(page.root).toEqualHtml(`
      <component-two>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-two>
    `);
  });
});
