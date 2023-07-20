const { test, expect, chromium } = require('@playwright/test');
test('brand login', async ({ }) => {
  const browser = await chromium.launch()
  const context = await browser.newContext({ storageState: 'brand.json' })
  const page = await context.newPage()

  await page.goto('https://brand.1851dev.com/')
  await page.getByRole('button', { name: 'icon Editorial Management' }).click();
  await page.getByText('Write Story').click();
  await page.getByPlaceholder('Enter Article Title ').click();
  await page.getByPlaceholder('Enter Article Title ').fill('test article');
  await page.getByPlaceholder('Enter Description').click();
  await page.getByPlaceholder('Enter Description').fill('test');
  await page.getByPlaceholder('Enter Description').press('Tab');
  test.slow();
  await page.getByLabel('Editorial', { exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Categories* Find Category' }).click();
  await page.getByText('Franchisee Spotlight').click();
  await page.getByRole('button', { name: 'Categories* Franchisee Spotlight' }).press('Tab');
  await page.getByLabel('Sponsored', { exact: true }).press('Tab');
    //Uploading a video
  await page.locator('#videoPath').click();
  await page.locator('#videoPath').fill('https://www.youtube.com/live/o_6u-51Vzhw?feature=share');
    //Uploading an image
  // await page.getByRole('button', { name: 'Upload' }).click();
  // await page.locator('div').filter({ hasText: 'Please upload an image between 1280 and 2400 pixels in size, then use the crop t' }).nth(1).press('Tab');
  // await page.getByRole('button', { name: 'close' }).press('Tab');
  // await page.locator('div').filter({ hasText: /^Please upload a photo$/ }).getByRole('textbox').press('Tab');
  // await page.locator('#description').press('Tab');
  // await page.getByRole('textbox').nth(2).press('Tab');
  // await page.getByRole('textbox').nth(2).click();
  // await page.getByRole('textbox').nth(2).setInputFiles('./image/a9e4928c04e2980480d9495b904131527217.webp');
  // await page.getByRole('button', { name: 'Upload Without Crop' }).click();
  // await page.locator('#imageDescription').click();
  // await page.locator('#imageDescription').fill('test');
  // await page.locator('#imageDescription').press('Tab');
  // await page.getByRole('button', { name: 'Author* Name Add Author' }).click();
  // await page.getByText('Jeff Dwyer').click();
  // await page.getByRole('textbox', { name: 'Rich Text Editor. Editing area: main' }).click();
  // await page.getByRole('textbox', { name: 'Rich Text Editor. Editing area: main' }).fill('test');
  // await page.getByRole('textbox', { name: 'Rich Text Editor. Editing area: main' }).press('Tab');
  // await page.getByRole('paragraph').filter({ hasText: 'Title Tag* (Helpful tips)10 characters entered' }).getByRole('link', { name: '(Helpful tips)' }).press('Tab');
  await page.getByPlaceholder('Enter Title Tag ').press('Tab');
  await page.getByPlaceholder('Enter Meta Description').press('Tab');
  await page.getByPlaceholder('Press enter to add keywords').fill('test');
  await page.getByPlaceholder('Press enter to add keywords').press('Tab');
  await page.locator('#focusKeyword').press('Tab');
  await page.locator('#focusKeyword').click();
  await page.locator('#focusKeyword').fill('test');
  await page.locator('#focusKeyword').press('Tab');
  await page.getByRole('heading', { name: 'Analysis (Helpful tips)' }).getByRole('link', { name: '(Helpful tips)' }).press('Tab');
    //Publishing a Story
  await page.getByLabel('Publish').check();
    //Scheduling a Story
  // await page.getByLabel('Schedule for a later date').check();
  // await page.getByPlaceholder('mm/dd/yyyy').click();
  // await page.getByRole('gridcell', { name: '29' }).click();
  // await page.getByPlaceholder('mm/dd/yyyy').press('Tab');
  // await page.getByRole('button', { name: 'Choose date, selected date is Jun 29, 2023' }).press('Tab');
  // await page.locator('#scheduledTime').click();
  // await page.locator('#scheduledTime').fill('05:45');
  await page.locator('#readTerms').check();
    //Creating AMPD
  // await page.getByLabel('AMPD').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('spinbutton').click();
  // await page.getByRole('spinbutton').fill('1000');
  // await page.getByText('Days').first().click();
  // await page.getByLabel('Let 1851 Write Your Content').check();
  // await page.getByLabel('Let 1851 Write Your Content').press('Tab');
  // await page.locator('input[name="\\31 "]').check();
  // await page.locator('input[name="\\31 "]').press('Tab');
  // await page.locator('input[name="\\32 "]').press('Tab');
  // await page.getByPlaceholder('Gender').press('Tab');
  // await page.getByPlaceholder('Age').press('Tab');
  // await page.getByPlaceholder('Education').press('Tab');
  // await page.getByPlaceholder('Relationship Status').press('Tab');
  // await page.getByPlaceholder('Occupation').press('Tab');
  // await page.getByPlaceholder('Press enter to add target audience').press('Tab');
  // await page.locator('textarea[name="notes"]').press('Tab');
  // await page.getByPlaceholder('Enter Email').fill('carmel@pearlthoughts.com');
  // await page.getByPlaceholder('Enter Email').press('Tab');
  // await page.getByRole('button', { name: 'Confirm Your Order' }).click();
});
