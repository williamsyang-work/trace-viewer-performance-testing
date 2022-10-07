import { initBrowser, page } from '../util/browser.js';
import { task, performanceTask, setProcess } from '../util/task.js';
import { initEnvironment } from '../util/env.js';



export default async function init (url: string) {

    initEnvironment();
    setProcess("Init");
        
    await task(
        "Starting the browser",
        async () => { await initBrowser(); }
    )

    await performanceTask(
        "Navigating to page",
        async () => {
            await page.goto(url);
            await page.evaluate(() =>  localStorage.clear());
            await page.waitForSelector("#theia-main-content-panel", { visible: true })
        },
        250
    )


}