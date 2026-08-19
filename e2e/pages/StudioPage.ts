import { Page, Locator, expect } from '@playwright/test';

export class StudioPage {
  readonly page: Page;
  readonly promptTextarea: Locator;
  readonly generateButton: Locator;
  readonly exportButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.promptTextarea = page.locator('textarea[name="prompt"]');
    this.generateButton = page.getByRole('button', { name: /generate ui/i });
    this.exportButton = page.getByRole('button', { name: /export code/i });
    this.successMessage = page.getByText(/ui successfully generated/i);
  }

  async goto() {
    await this.page.goto('/studio');
  }

  async fillPrompt(promptText: string) {
    await this.promptTextarea.fill(promptText);
  }

  async submitPrompt() {
    await this.generateButton.click();
  }

  async expectSuccess() {
    await expect(this.successMessage).toBeVisible({ timeout: 10000 });
    await expect(this.exportButton).toBeEnabled();
  }

  async clickExport() {
    await this.exportButton.click();
  }

  async exportAndDownload() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.clickExport();
    return await downloadPromise;
  }
}
