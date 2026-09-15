function launchBrowser(browserName) {
    if (browserName=="Chrome"){
        console.log("The given Browser is: ", browserName);
    } else {
        console.log("Unsupported Browser");
    }
}

function runTests(testType) {
    switch(testType) {
        case 'Smoke': 
            console.log("running Smoke Test");
            break;
        case 'Sanity': 
            console.log("Running Sanity Test");
            break;
        case 'Regression': 
            console.log("Running Regression Test");
            break;
        default:
            console.log("Running Smoke test by default..");
    }
}
launchBrowser('edge');
runTests('Sanity');