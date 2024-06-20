const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

(async function checkButtonExists() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();

    try {
        const url = 'http://localhost:3000'; // ודא שזו הכתובת הנכונה
        await driver.get(url);

        // המתן עד שהכפתור יימצא או ייכשל לאחר 10 שניות
        const buttonId = 'metal11';
        const buttonLocator = By.id(buttonId);

        let buttonExists = false;
        try {
            await driver.wait(until.elementLocated(buttonLocator), 10000);
            const button = await driver.findElement(buttonLocator);
            buttonExists = await button.isDisplayed();
        } catch (error) {
            buttonExists = false;
        }

        console.log(`Button with ID '${buttonId}' exists: ${buttonExists}`);

        // בדיקה האם הכפתור קיים
        assert.strictEqual(buttonExists, true, 'Button does not exist.');
    } catch (error) {
        console.error('Error during button existence check:', error);
        process.exit(1);
    } finally {
        await driver.quit();
    }
})();
