import { page } from "../process/init.js";
import { wait } from "../util/wait.js";
import { debugLog, errorLog } from "../util/log.js";
import * as ENV from "../util/env.js";

const environment = ENV.get();

export default async function openTrace() {

    let task = "";
    let target = "";
    try {
        debugLog(task = "Opening a trace");

        target = "left panel Trace-Viewer button";
        const TraceViewerLeftPanelButtonSelector = ".theia-app-left > ul:nth-child(1) > li:nth-child(6) > div:nth-child(1) > div:nth-child(1)";
        debugLog(task = "Finding " + target);
        await page.$(TraceViewerLeftPanelButtonSelector);

        await wait(500);

        debugLog(task = "Clicking " + target);
        await page.click(TraceViewerLeftPanelButtonSelector);

        await wait(500);

        target = "'Open Trace' button";
        const OpenTraceButton = ".theia-button";
        debugLog(task = "Finding " + target);
        await page.$(OpenTraceButton);

        debugLog(task = "Clicking " + target);
        await page.click(OpenTraceButton);

        await wait(1000);

        target = "'Many-Threads' directory";
        const ManyThreadsButton = ".theia-FileDialog > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2)";
        debugLog(task = "Finding " + target);
        await page.$(ManyThreadsButton);

        debugLog(task = "Clicking " + target);
        await page.click(ManyThreadsButton);

        await wait(500);

        target = "Open Button"
        const OpenButton = "button.theia-button:nth-child(3)";
        debugLog(task = "Finding " + target);
        await page.$(OpenButton);

        debugLog(task = "Clicking " + target);
        await page.click(OpenButton);
        
    } catch (e) {
        errorLog('OpenTrace', task, e);
    }
}