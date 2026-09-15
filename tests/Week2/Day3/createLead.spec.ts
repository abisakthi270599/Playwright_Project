import { test, expect } from '@playwright/test';

test("Create a Lead using CSS Slector", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //By Attribute value
    await page.locator('input[id="username"]').fill("democsr2");
    //By ID Value
    await page.locator("#password").fill("crmsfa");
    //By Class Value
    await page.locator(".decorativeSubmit").click();
    //By Text Value
    await page.locator("text=CRM/SFA").click();
    //By CSS Selector with Attribute Value
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    
    //Filling Create Lead form using CSS Selector
    await page.locator('#createLeadForm_companyName').fill("TestLeaf");
    await page.locator('#createLeadForm_firstName').fill("Abirami");
    await page.locator('#createLeadForm_lastName').fill("Aravind");
    await page.locator('#createLeadForm_personalTitle').fill("Mrs");
    await page.locator('#createLeadForm_generalProfTitle').fill("Software Tester");
    await page.locator('#createLeadForm_annualRevenue').fill("1000000");
    await page.locator('#createLeadForm_departmentName').fill("Testing");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("1234567890");

    //Iterate through all options in the Source dropdown
    const sourceDropdown = page.locator('#createLeadForm_dataSourceId');
    const sourceCount = await sourceDropdown.count();
    console.log("Source count is:", sourceCount);
    for (let i = 0; i < sourceCount; i++) {
        const optionText = await sourceDropdown.nth(i).innerText();
        console.log(optionText);
    }
    await page.locator('.smallSubmit').click();
})