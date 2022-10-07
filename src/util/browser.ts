import puppeteer from "puppeteer";
import { environment } from "./env.js";

export let browser: puppeteer.Browser;
export let page: puppeteer.Page;

export const initBrowser = async () => {
    browser = await puppeteer.launch({ headless: !environment.headful });
    page = await browser.newPage();
    page.setDefaultTimeout(60000);
}