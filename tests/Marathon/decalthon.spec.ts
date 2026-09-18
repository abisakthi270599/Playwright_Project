import{test, expect} from "@playwright/test"

test('Search product, apply filters, add to cart in Decathlon', async ({page})=> {

    await page.goto('https://www.decathlon.in/');
    await expect(page).toHaveTitle(/Decathlon/);
    await page.locator('search-icon').click();
    await expect(page.locator('search-input')).toBeEnabled();
    await page.locator('search-input').fill('shoes');
    await page.keyboard.press('Enter');
    const pageTitle = await page.title();
    console.log("Page Title:", pageTitle);
    await expect(page).toHaveTitle("Search | shoes");
    await page.locator('text=Running').click();
    await page.locator('text=Men').click();
    await page.locator('text=UK 10.5').click();
    await page.locator('sort-dropdown').click();
    await page.locator('text=Price: Low to High').click();
    await page.locator('product-list-item').first().click();
    await page.locator('text=UK 10.5 - EU 45').click();
    await page.locator('add-to-cart-button').click();
    await page.locator('cart-icon').click();
    const totalCartAmount = await page.locator('total-cart-value').innerText();
    console.log("Total Cart Amount:", totalCartAmount);
});




/*
Test Steps
1. Launch the browser.
2. Navigate to https://www.decathlon.in/.
3. Verify the user is navigated to the Decathlon home page.
4. Click on the Search icon on the home page.
5. Verify the search input field is enabled.
6. Enter the product name as "shoes" in the search field.
7. Press Enter to search the product.
8. Capture and print the page title in the console.
9. Verify the page title is displayed as "Search | shoes".
10. Click on the "Running" category filter.
11. Click on the "Men" gender filter.
12. Click on the shoe size filter "UK 10.5".
13. Click on the "Most relevant" sorting dropdown.
14. Select "Price: Low to High" from the sorting options.
15. Click on the first product from the displayed product list.
16. Select the shoe size "UK 10.5 - EU 45" on the product detail page.
17. Click on the "Add to Cart" button.
18. Click on the Cart option.
19. Fetch the total cart value.
20. Print the total cart amount in the console.
Expected Result
Product should be successfully searched, filtered, sorted by "Price: Low to High", added to the cart, and the total cart
value should be displayed and printed in the console
*/