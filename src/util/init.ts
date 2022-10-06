import puppeteer from 'puppeteer';
import { pause, log } from './util';

export const browser = await puppeteer.launch({ headless: false });

export const page = await browser.newPage();

export async function init () {
    
    log('Initializing...');
    try {
        log('Opening browser', true);
        const browser = await puppeteer.launch({ headless: false });
        log('Opening tab', true);
        const page = await browser.newPage();
        log('Navigating to trace-extension.', true);
        await page.goto('http://localhost:3000/#/repo/eyanwil/Traces');
        log('Waiting 10 seconds...', true);
        await pause(10000);
        log('Closing Browser.', true);
        await browser.close();
        return [browser, page];
    } catch (e) {
        log('There was a problem initializing...');
        throw e;
    }

}