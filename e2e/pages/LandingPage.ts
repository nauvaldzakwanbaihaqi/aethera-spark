import { Page, Locator } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly beginJourneyButton: Locator;
  readonly initializeProjectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.beginJourneyButton = page.getByRole('link', { name: /begin journey/i });
    this.initializeProjectButton = page.getByRole('link', { name: /initialize project/i }).first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickBeginJourney() {
    await this.beginJourneyButton.click();
  }

  async clickInitializeProject() {
    await this.initializeProjectButton.click();
  }
}
