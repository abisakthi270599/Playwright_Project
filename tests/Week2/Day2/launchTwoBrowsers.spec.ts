/*
Load Red Bus in an Edge browser instance and verify the page title and URL.  
Load Flipkart in a Webkit browser instance and verify the page title and URL.
Red Bus: https://www.redbus.in 
Flipkart: https://www.flipkart.com
*/

import {test, chromium, webkit} from "@playwright/test"

//Red bus in Edge Browser
test('Launch Red Bus in an Edge browser', async () => {
    const edgeBrowser = await chromium.launch()
    const edgepage = await edgeBrowser.newPage()
    await edgepage.goto('https://www.redbus.in')
    const title = await edgepage.title()
    const url = edgepage.url()
    console.log("Red Bus Title :", await edgepage.title());
    console.log("Red Bus URL: ", edgepage.url());
    await edgeBrowser.close()
});

//Flipkart in Webkit Browser
test('Launch Flipkart in a Webkit browser', async () => {
    const webkitBrowser = await webkit.launch()
    const webkitpage = await webkitBrowser.newPage()
    await webkitpage.goto('https://www.flipkart.com')
    const title = await webkitpage.title()
    const url = webkitpage.url()
    console.log("Flipkart Title :", await webkitpage.title());
    console.log("Flipkart URL: ", webkitpage.url());
    await webkitBrowser.close()
});