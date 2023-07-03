import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin.1851dev.com/site/login.html');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('pearlthoughts');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('2v9uzHmjGEwShpP');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: ' Create Brand' }).click();
  await page.getByLabel('Brand/Company').click();
  await page.getByLabel('Brand/Company').fill('testplay');
  await page.getByLabel('1851 URL').fill('testplay');
  await page.locator('.bootstrap-tagsinput > input').first().click();
  await page.locator('.bootstrap-tagsinput > input').first().fill('test@gmail.com');
  await page.getByLabel('User Name').click();
  await page.getByLabel('User Name').fill('testplay');
  await page.getByRole('combobox', { name: 'Type *' }).selectOption('Visibility');
  await page.getByRole('button', { name: '-- Select Brand Category -- ' }).click();
  await page.locator('span').filter({ hasText: 'Automotive' }).click();
  await page.locator('html').click();
  await page.getByLabel('Photo').click();
  await page.getByLabel('Photo').setInputFiles('./image/dog-training-elite-logo.jpg');
  await page.getByRole('button', { name: 'Submit' }).click();
});