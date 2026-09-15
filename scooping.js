const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion=="Chrome") {
        let browserVersion = "edge";
        console.log("Inside block: ", browserVersion);        
    } 
    console.log("Outside Block: ", browserVersion);
    }
getBrowserVersion();