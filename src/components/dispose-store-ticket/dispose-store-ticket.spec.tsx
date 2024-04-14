import { newSpecPage } from '@stencil/core/testing';
import { DisposeStoreTicket } from './dispose-store-ticket';
import { dispose } from '../../store/state';

describe('dispose-store-ticket', () => {
  beforeEach(() => dispose());

  it('should square clicks', async () => {
    const page = await newSpecPage({
      components: [DisposeStoreTicket],
      html: `<dispose-store-ticket></dispose-store-ticket>`,
    });
    await page.waitForChanges();
    
    const button = page.root.querySelector('button');
    expect(button).toBeTruthy();

    button.click();
    await page.waitForChanges();
    expect(page.root.querySelector('h1').textContent).toBe('1');

    button.click();
    await page.waitForChanges();
    expect(page.root.querySelector('h1').textContent).toBe('4');
  });
});
