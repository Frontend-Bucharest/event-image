const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`file://${__dirname}/event.html`);
  await page.screenshot({ path: "event.png" });

  await browser.close();
})();
