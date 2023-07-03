const { test, expect, chromium } = require('@playwright/test');
test('brand login', async ({ }) => {
  const browser = await chromium.launch()
  const context = await browser.newContext({ storageState: 'brand.json' })
  const page = await context.newPage()

  await page.goto('https://brand.1851dev.com/');
  await page.getByText('News Widget').click();
  await page.locator('.news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').first().press('Tab');
  await page.locator('body').press('Tab');
  await page.locator('div:nth-child(2) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(4) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(6) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(7) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(8) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').click();
  await page.locator('div:nth-child(9) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(10) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(11) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.getByPlaceholder('Widget Name').fill('test widget two');
  await page.getByPlaceholder('Widget Name').press('Tab');
  await page.locator('#type').click();
  await page.getByRole('option', { name: 'All Stories' }).click();
  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Get Code' }).click();
  await page.locator('#type').press('Tab');
  await page.getByRole('button', { name: 'Save Widget' }).click();
  // Sorting Active Widgets table
  // await page.getByRole('button', { name: '10' }).first().click();
  // await page.getByRole('option', { name: '5', exact: true }).click();
  // //Searching on Active Widgets table
  // await page.getByPlaceholder('Search').first().click();
  // await page.getByPlaceholder('Search').first().fill('one');
  // await page.getByPlaceholder('Search').first().press('Tab');
  // await page.locator('.MuiInputBase-root > .MuiButtonBase-root').first().press('Tab');
  // test.setTimeout(120000);
  // //Delete Widget
  // await page.getByRole('row', { name: 'test widget one All Stories 6 Widget 7 Edit Delete' }).locator('a').nth(1).click();
  // await page.getByRole('button', { name: 'Yes' }).click();

})