require('dotenv').config({ path: `./env/.env.${process.env.NODE_ENV || 'qa'}` });

const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  const baseURL = process.env.BASE_URL || 'http://localhost:3000';

  await page.goto(baseURL);
  await expect(page).toHaveTitle('Vite + React');
});
