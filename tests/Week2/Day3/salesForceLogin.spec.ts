import{test, expect} from "@playwright/test"

test('Create Lead', async ({page})=> {

    await page.goto("https://login.salesforce.com/?locale=in");
    await expect(page).toHaveTitle("Login | Salesforce");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#Login").click();
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click();
    const title = await page.title();
    console.log("Page Title: " + title);
});
