import { Builder, By, Key, WebElement } from "selenium-webdriver";
export const google = async function (): Promise<WebElement> {
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

    // return the results of the search
    const searchResults = await chromeDriver.findElement(By.id("search"));
    return searchResults;
  } catch (error) {
    console.error("selenium script failed:\n", error);
  } finally {
    await chromeDriver.quit();
  }
};
