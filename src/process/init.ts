import puppeteer from 'puppeteer';
import { debugLog, errorLog } from '../util/log.js';
import { wait } from '../util/wait.js';
import * as ENV from '../util/env.js';

const environment = ENV.get();
export let browser: puppeteer.Browser;
export let page: puppeteer.Page;

export async function init (url: string) {
    
    let task = "";

    try {
        debugLog(task = 'Opening browser');
        browser = await puppeteer.launch({ headless: !environment.headful });

        debugLog(task = 'Opening tab');
        page = await browser.newPage();

        debugLog(task = 'Navigating to trace-extension.');
        await page.goto(url);

        debugLog(task = 'Waiting for page to load...');
        await wait(10000);

        return true;
    } catch (e) {
        errorLog('init', task, e);
        return false;
    }

}