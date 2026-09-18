import{test, expect} from "@playwright/test"

test('Verify dynamic movie ticket booking flow in PVR Cinemas website', async ({page})=> {

    await page.goto("https://www.pvrcinemas.com/");
    await page.locator('.cities-placed').click();
    await page.locator('text=Chennai').click();
    await page.locator('text=Cinema').click();
    await page.locator('select[name="cinema"]').selectOption({label: 'PVR Forum Vijaya Mall'});
    await page.locator('select[name="date"]').selectOption({label: 'Today'});
    await page.locator('select[name="movie"]').selectOption({label: 'Avatar: The Way of Water (3D) (English)'});
    await page.locator('select[name="showtime"]').selectOption({label: '10:00 AM'});
    await page.locator('button[type="submit"]').click();
    await page.locator('button:has-text("Accept")').click({timeout: 5000}).catch(() => {});
    await page.locator('button:has-text("Accept")').click({timeout: 5000}).catch(() => {});
    await page.locator('div.seat').first().click();
    const selectedSeatInfo = await page.locator('div.selected-seat-info').innerText();
    console.log("Selected Seat Info:", selectedSeatInfo);
    const totalTicketAmount = await page.locator('div.total-amount').innerText();
    console.log("Total Ticket Amount:", totalTicketAmount);
    await expect(page).toHaveTitle(/PVR Cinemas/);
    await page.locator('button:has-text("Proceed")').click();
});


/*
Test Steps
1. Launch the browser.
2. Navigate to https://www.pvrcinemas.com/.
3. Select the required city.
4. Click on the Cinema option.
5. Click on the Select Cinema dropdown.
6. Select any available cinema from the list.
7. Select any available date (Today / Tomorrow / Upcoming).
8. Select any available movie from the movie list.
9. Select any available show time.
10. Click on the Submit button.
11. Accept the consent / cookie popup if displayed.
12. Accept any additional confirmation popup if displayed.
13. Select any available seat from the seating layout.
14. Verify the selected seat information is displayed.
15. Verify the total ticket amount is displayed.
16. Verify the page title is displayed correctly.
17. Click on the Proceed button.
*/