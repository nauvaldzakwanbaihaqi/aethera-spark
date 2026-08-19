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

  test('Complete Critical Path: Landing -> Auth -> Dashboard -> Studio AI Generation', async ({ page }) => {
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
  });
});
