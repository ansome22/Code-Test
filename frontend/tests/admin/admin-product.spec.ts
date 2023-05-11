import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto('http://localhost:4200/');
  await page.getByLabel('User Name').click();
  let screenshot = await page.screenshot();
  testInfo.attach('Before', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByLabel('User Name').fill('alethoa6');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password.1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'List Products' }).click();
  await page.getByRole('heading', { name: 'Products:' }).click();
  screenshot = await page.screenshot({ fullPage: true });
  testInfo.attach('List Products', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByText('Lampaaa$ 20').click();
  await page.getByRole('button', { name: 'Edit Product' }).click();
  await page.getByLabel('Price').click();
  screenshot = await page.screenshot();
  testInfo.attach('Edit Screen', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByLabel('Price').fill('50');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Lampaaa$ 50').click();
  screenshot = await page.screenshot({ fullPage: true });
  await testInfo.attach('PriceChange', {
    body: screenshot,
    contentType: 'image/png',
  });
});
