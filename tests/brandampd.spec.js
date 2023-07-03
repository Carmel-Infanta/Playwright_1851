const {test,expect,chromium} = require('@playwright/test');
test('brand login', async ({  }) => {
   const browser = await chromium.launch()  
const context = await browser.newContext({storageState: 'brand.json'})
const page = await context.newPage()

await page.goto('https://brand.1851dev.com/');
await page.getByRole('button', { name: 'icon Editorial Management' }).click();
  await page.getByText('AMPD', { exact: true }).click();
  await page.getByLabel('Brand Page Promotion').check();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('1000');
  await page.getByText('3', { exact: true }).click();
  await page.locator('body').press('Tab');
  await page.getByLabel('Let 1851 Write Your Content').check();
  await page.locator('input[name="\\31 "]').check();
  await page.locator('input[name="\\31 "]').press('Tab');
  await page.locator('input[name="\\32 "]').press('Tab');
  await page.getByPlaceholder('Gender').press('Tab');
  await page.getByPlaceholder('Age').press('Tab');
  await page.getByPlaceholder('Education').press('Tab');
  await page.getByPlaceholder('Relationship Status').press('Tab');
  await page.getByPlaceholder('Occupation').press('Tab');
  await page.getByPlaceholder('Press enter to add target audience').press('Tab');
  await page.getByRole('button', { name: 'Confirm Your Order' }).click();
  await page.getByPlaceholder('Type Email').click();
  await page.getByPlaceholder('Type Email').fill('carmel@pearlthoughts.com');
  await page.getByPlaceholder('Type Name').click();
  await page.getByPlaceholder('Type Name').fill('test');
  await page.locator('#confirm').check();
  await page.getByRole('button', { name: 'Confirm Your Order' }).click();
  await page.getByRole('dialog', { name: 'Are you sure you want to AMPLIFY your story?' }).locator('div').filter({ hasText: /^Confirm Your Order$/ }).click();
});
