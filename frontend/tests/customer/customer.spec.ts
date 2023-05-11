import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto('http://localhost:4200/');
  await page.getByLabel('User Name').click();
  let screenshot = await page.screenshot();
  testInfo.attach('Before', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByLabel('User Name').fill('mrich');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password.1');
  screenshot = await page.screenshot();
  testInfo.attach('Filled Out', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'View products' }).click();
  await page
    .locator('div')
    .filter({
      hasText:
        /^Name: LampDescription: aaaPrice: \$ 20Add to CartAdded to cart$/,
    })
    .getByRole('button', { name: 'Add to Cart' })
    .click();
  screenshot = await page.screenshot();
  testInfo.attach('Product List', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByRole('button', { name: 'Go Back' }).click();
  await page.getByRole('button', { name: 'Go to checkout' }).click();
  await page.getByText('Lamp').click();
  screenshot = await page.screenshot();
  testInfo.attach('CheckOut', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('heading', { name: 'Welcome Mike!' }).click();
  screenshot = await page.screenshot();
  await testInfo.attach('Back to Dashboard', {
    body: screenshot,
    contentType: 'image/png',
  });
});
