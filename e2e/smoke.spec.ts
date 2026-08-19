import { test, expect } from '@playwright/test';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { StudioPage } from './pages/StudioPage';

test.describe('Aethera Spark Critical Path Smoke Test', () => {
  test('Protected routes redirect unauthenticated users to login', async ({ page }) => {
    await page.goto('/studio');
    await expect(page).toHaveURL(/\/login/);

    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });

  test('Register form validation shows Zod errors on invalid input and prevents redirect', async ({ page }) => {
    const authPage = new AuthPage(page);

    await authPage.gotoRegister();
    await expect(page).toHaveURL(/\/register/);

    // Submit with short name ('a'), invalid email ('invalid-email'), and short password ('123')
    await authPage.fillRegisterForm('a', 'invalid-email', '123');
    await authPage.submit();

    // Assert Zod validation error messages appear in the UI via data-testid
    await expect(authPage.nameError).toBeVisible();
    await expect(authPage.nameError).toHaveText(/at least 2 characters/i);

    await expect(authPage.emailError).toBeVisible();
    await expect(authPage.emailError).toHaveText(/invalid email address/i);

    await expect(authPage.passwordError).toBeVisible();
    await expect(authPage.passwordError).toHaveText(/at least 8 characters/i);

    // Assert user is NOT redirected to dashboard and remains on /register
    await expect(page).toHaveURL(/\/register/);
  });

  test('Complete Critical Path: Landing -> Auth -> Dashboard -> Studio AI Generation -> Code Export', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const authPage = new AuthPage(page);
    const dashboardPage = new DashboardPage(page);
    const studioPage = new StudioPage(page);

    // 1. Landing Page Navigation
    await landingPage.goto();
    await expect(page).toHaveTitle(/Home/);
    await landingPage.clickBeginJourney();
    await expect(page).toHaveURL(/\/register/);

    // 2. Registration / Authentication (Mock)
    await authPage.fillRegisterForm('Jane Developer', 'test@aethera.com', 'developer123');
    await authPage.submit();
    await expect(page).toHaveURL(/\/dashboard/);
    await dashboardPage.expectLoaded();

    // 3. Navigate to Studio & AI Prompt Generation Flow
    await studioPage.goto();
    await expect(page).toHaveURL(/\/studio/);

    await studioPage.fillPrompt('A dark luxury SaaS analytics dashboard with glassmorphism components');
    await studioPage.submitPrompt();

    // 4. Verify AI Generation Completion & Preview Output
    await studioPage.expectSuccess();

    // 5. Verify Real Browser File Download Event on Code Export
    const download = await studioPage.exportAndDownload();
    expect(download.suggestedFilename()).toBe('aethera-project.zip');
  });
});
