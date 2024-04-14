import { newE2EPage } from '@stencil/core/testing';

describe('e2e-events-ticket', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e2e-events-ticket></e2e-events-ticket>');

    const element = await page.find('e2e-events-ticket');
    expect(element).toHaveClass('hydrated');
  });

  it('should work', async () => {
    const page = await newE2EPage();
    await page.setContent('<e2e-events-ticket></e2e-events-ticket>');

    const fileImportComponent = await page.find('e2e-events-ticket').then(el => el.find('file-upload'));
    expect(fileImportComponent).toBeTruthy();

    const mockFile = {
      arrayBuffer: () => Promise.resolve(new Uint32Array([1, 2]) as ArrayBuffer),
      name: 'filename'
    };
    console.log('[TEST] is file array fn exists', !!mockFile.arrayBuffer);

    fileImportComponent.triggerEvent('fileUploaded', { detail: mockFile });
    await page.waitForChanges();
  });
});
