const { test, expect, chromium } = require('@playwright/test');
test('brand login', async ({ }) => {
  const browser = await chromium.launch()
  const context = await browser.newContext({ storageState: 'brand.json' })
  const page = await context.newPage();

  await page.goto('https://brand.1851dev.com/')
  //filter
  //  await page.locator('.mt-36 > div > a').click();
  //  await page.getByRole('button', { name: '1', exact: true }).first().click();
  //  await page.getByRole('button', { name: '30' }).nth(1).click();
  // await page.getByRole('button', { name: 'Apply' }).click();
  // //Search
  // await page.getByPlaceholder('Search').click();
  // await page.getByPlaceholder('Search').fill('brianna');
  // await page.locator('.MuiInputBase-root > .MuiButtonBase-root').click();
  // //edit
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Edit' }).click();
  // const page1 = await page1Promise;
  // await page1.getByPlaceholder('Enter Article Title ').click();
  // await page1.getByPlaceholder('Enter Article Title ').fill('Toastique Founder Brianna Keefe Discusses Elements');
  // await page1.getByPlaceholder('Enter Title Tag ').fill('Toastique Founder Brianna Keefe Discusses Elements ');
  // await page1.locator('#readTerms').check();
  // await page1.getByRole('button', { name: 'Submit' }).click();
  // //Story click
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Toastique Targets the Sunshine State for Continued Franchise Growth' }).click()
  const page2 = await page2Promise;
  await page2.goto('https://1851dev.com/toastique/toastique-stands-out-due-to-its-healthy-food-and-gourmet-toast-offerings-2722093');
});

