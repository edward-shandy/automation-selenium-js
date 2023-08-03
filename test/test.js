const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver')
const expect = require('chai').expect;


describe('test google search', function(){
  it ('should open the browser and go to Google page', async function() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.manage().window().maximize();

      await driver.get('https://www.google.com');

      await driver.wait(until.elementLocated(By.name('q')), 5000);

      await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN);

      await driver.wait(until.titleContains('Selenium WebDriver'), 5000);

      await driver.findElements

      const pageTitle = await driver.getTitle();
      console.log('Page title:', pageTitle);

      expect(pageTitle).to.contain('Selenium WebDriver');
      // await driver.quit();
    } catch (error) {
      console.error('Error:', error);
      throw error;

    } finally {
      await driver.quit();
    }
  }).timeout(15000);
});

