const {test,expect,chromium} = require('@playwright/test');
test('brand login', async ({  }) => {
   const browser = await chromium.launch()  
const context = await browser.newContext({storageState: 'auth.json'})
const page = await context.newPage()

await page.goto('https://brand.1851dev.com/');
await page.getByRole('button', { name: 'icon Editorial Management' }).click();
  await page.getByText('Write Story').click();
  await page.getByPlaceholder('Enter Article Title ').click();
  await page.getByPlaceholder('Enter Article Title ').fill('test automate');
  await page.getByPlaceholder('Enter Description').click();
  await page.getByPlaceholder('Enter Description').fill('test');
  await page.getByRole('button', { name: 'Categories* Find Category' }).click();
  await page.getByRole('option', { name: 'Columns' }).click();
  await page.getByRole('button', { name: 'Categories* Columns' }).press('Tab');
  await page.getByLabel('Sponsored', { exact: true }).press('Tab');
  await page.locator('#videoPath').click();
  await page.locator('#videoPath').fill('https://www.youtube.com/live/o_6u-51Vzhw?feature=share');
  await page.getByRole('button', { name: 'Author* Name Add Author' }).click();
  await page.getByText('Jeff Dwyer').click();
  await page.getByRole('textbox', { name: 'Rich Text Editor. Editing area: main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor. Editing area: main' }).press('Tab');
  await page.frameLocator('iframe').getByRole('link', { name: 'Why Paris Baguette is Poised for Explosive Growth in Canada in 2023' }).press('Tab');
  await page.frameLocator('iframe').getByRole('button', { name: 'Share' }).press('Tab');
  await page.frameLocator('iframe').getByRole('button', { name: 'Play' }).press('Tab');
  await page.frameLocator('iframe').getByRole('link', { name: 'Watch on YouTube' }).press('Tab');
  await page.getByRole('paragraph').filter({ hasText: 'Title Tag* (Helpful tips)13 characters entered' }).getByRole('link', { name: '(Helpful tips)' }).press('Tab');
  await page.getByPlaceholder('Enter Title Tag ').press('Tab');
  await page.getByPlaceholder('Enter Meta Description').press('Tab');
  await page.getByPlaceholder('Press enter to add keywords').fill('test');
  await page.getByPlaceholder('Press enter to add keywords').press('Enter');
  await page.getByPlaceholder('Press enter to add keywords').press('Tab');
  await page.locator('#focusKeyword').fill('test');
  await page.locator('#focusKeyword').press('Tab');
  await page.getByRole('heading', { name: 'Analysis (Helpful tips)' }).getByRole('link', { name: '(Helpful tips)' }).press('Tab');
  await page.locator('#readTerms').check();
  await page.getByRole('button', { name: 'Submit' }).click();
});