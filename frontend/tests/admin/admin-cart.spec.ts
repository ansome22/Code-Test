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
  screenshot = await page.screenshot();
  testInfo.attach('Filled Out', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'List Customer Carts' }).click();
  await page.getByRole('heading', { name: 'Customers Carts:' }).click();
  screenshot = await page.screenshot();
  testInfo.attach('Checkout', {
    body: screenshot,
    contentType: 'image/png',
  });
  await page
    .getByText('First Name: MikeLast Name: DoorNumber of items: 2')
    .click();
  await page.getByRole('heading', { name: 'Cart:' }).click();
  screenshot = await page.screenshot();
  testInfo.attach('See Cart', {
    body: screenshot,
    contentType: 'image/png',
  });
});
