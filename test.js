const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


async function createDriver() {
  const options = new chrome.Options();
  // options.addArguments('--headless');
  return new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}

async function main() {
  const driver = await createDriver();
  try {
    await driver.get('https://www.google.com');

    await driver.wait(until.elementLocated(By.name('q')), 5000);

    await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN);

    await driver.wait(until.titleContains('Selenium WebDriver'), 5000);

    await driver.findElements

    const pageTitle = await driver.getTitle();
    console.log('Page title:', pageTitle);

    
    // await driver.quit();
  } catch (error) {
    console.error('Error:', error);
    
    await driver.quit();
  }
}

// Panggil fungsi utama untuk menjalankan skrip
main();
