const {test,expect,chromium} = require('@playwright/test');
test('brand login', async ({  }) => {
   const browser = await chromium.launch()  
const context = await browser.newContext({storageState: 'auth.json'})
const page = await context.newPage()

await page.goto('https://brand.1851dev.com/');
await page.getByText('News Widget').click();
  await page.locator('.news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').first().click();
  await page.locator('body').press('Tab');
  await page.locator('div:nth-child(2) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(4) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(6) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(7) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(8) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(9) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(10) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.locator('div:nth-child(11) > .news-widget-v3_LayoutContainer__TPDpm > .MuiButtonBase-root').press('Tab');
  await page.getByPlaceholder('Widget Name').fill('test auto');
  await page.getByPlaceholder('Widget Name').press('Tab');
  await page.locator('#type').click();
  await page.getByRole('option', { name: 'All Stories' }).click();
  await page.locator('#type').press('Tab');
  await page.getByRole('checkbox', { name: 'controlled' }).press('Tab');
  await page.getByRole('button', { name: 'Preview' }).press('Tab');
  await page.getByRole('button', { name: 'Get Code' }).press('Tab');
  await page.getByRole('button', { name: 'Save Widget' }).click();
})