const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span [title='Shivansh Gupta Pepcoding Junior']");
  const target = await page.$("span [title='Shivansh Gupta Pepcoding Junior']");
  await target.click();
  const inp = await page.$(
   // "#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text"
   "#main > footer > div._2BU3P.tm2tP.copyable-area > div > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
   );


  for (let i = 0; i < 250; i++) {
    await inp.type("You are the best brother");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");