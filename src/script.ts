import { Builder, By, Key } from "selenium-webdriver";
export const google = async function () {
  const chromeDriver = await new Builder().forBrowser("chrome").build();

  try {
    // navigate to google.com home page
    await chromeDriver.get("https://www.google.com");

    // find the search bar and fill it with the search term "testing"
    await chromeDriver
      .findElement({ name: "q" })
      .sendKeys("testing", Key.RETURN);

    // wait for the search results to load
    await chromeDriver.wait(
      chromeDriver.findElement(By.id("search")).isDisplayed(),
      10000
    );
  } catch (error) {
    console.error("selenium script failed:\n", error);
  } finally {
    await chromeDriver.quit();
  }
};
