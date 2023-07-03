const { test, expect, chromium } = require('@playwright/test');
test('brand login', async ({ }) => {
    const browser = await chromium.launch()
    const context = await browser.newContext({ storageState: 'brand.json' })
    const page = await context.newPage()

    await page.goto('https://brand.1851dev.com/')
    await page.getByRole('button', { name: 'icon Editorial Management' }).click();
    await page.getByText('Story Brainstorm').click();
    //Creating Story brainstorm
    await page.getByPlaceholder('Enter the Headline of Your Release Here').click();
    await page.getByPlaceholder('Enter the Headline of Your Release Here').fill('New');
    await page.getByPlaceholder('Enter the Summary of your Release Here').click();
    await page.getByPlaceholder('Enter the Summary of your Release Here').fill('brain');
    await page.getByPlaceholder('Enter Notes Here').click();
    await page.getByPlaceholder('Enter Notes Here').fill('test ntes');
    await page.getByRole('button', { name: 'Submit' }).click();
    test.setTimeout(1900000);

    //Editing Story brainstorm
    //   await page.getByRole('row', { name: '06/29/2023 New brain test ntes Edit Delete Approve Disapprove' }).getByRole('link', { name: 'Edit' }).click();
    //   await page.getByPlaceholder('Enter the Headline of Your Release Here').click();
    //   await page.getByPlaceholder('Enter the Headline of Your Release Here').fill('testing the headline');
    //   await page.getByPlaceholder('Enter the Summary of your Release Here').click();
    //   await page.getByPlaceholder('Enter the Summary of your Release Here').fill('brainstorm test');
    //   await page.getByPlaceholder('Enter Notes Here').click();
    //   await page.getByPlaceholder('Enter Notes Here').fill('test ntes test');
    //   await page.getByRole('button', { name: 'Submit' }).click();
    //   test.setTimeout(1200000)
    //Deleting Story Brainstorm
    // await page.getByRole('cell', { name: 'Edit Delete Approve Disapprove' }).locator('a').nth(1).click();
    // await page.getByRole('button', { name: 'Yes' }).click();

});